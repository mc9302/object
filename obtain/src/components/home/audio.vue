<template>
    <div class="audio">
        <div class="audioTop">
            <img src="../../../static/image/1.jpg"><span>罗辑思维</span><span class="audioAll" @click="music()">>播放全部</span>
            <img :src="boll?'../../../static/image/nav_01.png':'../../../static/image/nav_02.png'"><p :class="boll?'pss':'ps'">踩刹车时踩刹车时踩刹车四川省</p>
        </div>
        <div class="di main-wrap" v-loading="audio.waiting" v-if="boll">
            <!-- 这里设置了ref属性后，在vue组件中，就可以用this.$refs.audio来访问该dom元素 -->
            <audio ref="audio" class="dn" 
            :src="url" :preload="audio.preload"
            @play="onPlay" 
            @error="onError"
            @waiting="onWaiting"
            @pause="onPause" 
            @timeupdate="onTimeupdate" 
            @loadedmetadata="onLoadedmetadata"
            ></audio>
            <div>
                <p @click="guanbi()">X</p>
                <el-button type="text" @click="startPlayOrPause">{{audio.playing | transPlayPause}}</el-button>
                <!-- <el-button v-show="!controlList.noSpeed" type="text" @click="changeSpeed">{{audio.speed | transSpeed}}</el-button> -->

                <el-tag type="info">{{ audio.currentTime | formatSecond}}</el-tag>

                <el-slider v-show="!controlList.noProcess" v-model="sliderTime" :format-tooltip="formatProcessToolTip" @change="changeCurrentTime" class="slider"></el-slider>
                
                <el-tag type="info">{{ audio.maxTime | formatSecond }}</el-tag>

                <el-button v-show="!controlList.noMuted" type="text" @click="startMutedOrNot">{{audio.muted | transMutedOrNot}}</el-button>

                <el-slider v-show="!controlList.noVolume" v-model="volume" :format-tooltip="formatVolumeToolTip" @change="changeVolume" class="slider"></el-slider>
                
                <!-- <a :href="url" v-show="!controlList.noDownload" target="_blank" class="download" download>下载</a> -->
            </div>
        </div>
    </div>
</template>

<script>
function realFormatSecond(second) {
    var secondType = typeof second
    if (secondType === 'number' || secondType === 'string') {
      second = parseInt(second)
      var hours = Math.floor(second / 3600)
      second = second - hours * 3600
      var mimute = Math.floor(second / 60)
      second = second - mimute * 60
      return hours + ':' + ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
    } else {
      return '0:00:00'
    }
  }
export default {
    props: {
      theUrl: {
        type: String,
        required: true,
      },
      theSpeeds: {
        type: Array,
        default () {
          return [1, 1.5, 2]
        }
      },
      theControlList: {
        type: String,
        default: ''
      }
    },
    data() {
        return {
            boll:false,
            url: this.theUrl || 'http://devtest.qiniudn.com/secret base~.mp3',
            audio: {
            currentTime: 0,
            maxTime: 0,
            playing: false,
            muted: false,
            speed: 1,
            waiting: true,
            preload: 'auto'
            },
            sliderTime: 0,
            volume: 100,
            speeds: this.theSpeeds,
            controlList: {
            // 不显示下载
            noDownload: false,
            // 不显示静音
            noMuted: false,
            // 不显示音量条
            noVolume: false,
            // 不显示进度条
            noProcess: false,
            // 只能播放一个
            onlyOnePlaying: false,
            // 不要快进按钮
            noSpeed: false
            }
        }
    },
    methods: {
        music(){
            this.boll = true;
        },
        setControlList () {
        let controlList = this.theControlList.split(' ')
        controlList.forEach((item) => {
          if(this.controlList[item] !== undefined){
            this.controlList[item] = true
          }
        })
      },
      changeSpeed() {
        let index = this.speeds.indexOf(this.audio.speed) + 1
        this.audio.speed = this.speeds[index % this.speeds.length]
        this.$refs.audio.playbackRate = this.audio.speed
      },
      startMutedOrNot() {
        this.$refs.audio.muted = !this.$refs.audio.muted
        this.audio.muted = this.$refs.audio.muted
      },
      // 音量条toolTip
      formatVolumeToolTip(index) {
        return '音量条: ' + index
      },
      // 进度条toolTip
      formatProcessToolTip(index = 0) {
        index = parseInt(this.audio.maxTime / 100 * index)
        return '进度条: ' + realFormatSecond(index)
      },
      // 音量改变
      changeVolume(index = 0) {
        this.$refs.audio.volume = index / 100
        this.volume = index
      },
      // 播放跳转
      changeCurrentTime(index) {
        this.$refs.audio.currentTime = parseInt(index / 100 * this.audio.maxTime)
      },
      startPlayOrPause() {
        return this.audio.playing ? this.pausePlay() : this.startPlay()
      },
      // 开始播放
      startPlay() {
        this.$refs.audio.play()
      },
      // 暂停
      pausePlay() {
        this.$refs.audio.pause()
      },
      // 当音频暂停
      onPause () {
        this.audio.playing = false
      },
      // 当发生错误, 就出现loading状态
      onError () {
        this.audio.waiting = true
      },
      // 当音频开始等待
      onWaiting (res) {
        console.log(res)
      },
      // 当音频开始播放
      onPlay (res) {
        console.log(res)
        this.audio.playing = true
        this.audio.loading = false
        if(!this.controlList.onlyOnePlaying){
          return 
        }
        let target = res.target
        let audios = document.getElementsByTagName('audio');
        [...audios].forEach((item) => {
          if(item !== target){
            item.pause()
          }
        })
      },
      // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
      onTimeupdate(res) {
        // console.log('timeupdate')
        // console.log(res)
        this.audio.currentTime = res.target.currentTime
        this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
      },
      // 当加载语音流元数据完成后，会触发该事件的回调函数
      // 语音元数据主要是语音的长度之类的数据
      onLoadedmetadata(res) {
        console.log('loadedmetadata')
        console.log(res)
        this.audio.waiting = false
        this.audio.maxTime = parseInt(res.target.duration)
      },
      guanbi(){
          this.boll=false
      }
    },
    filters: {
      formatSecond(second = 0) {
        return realFormatSecond(second)
      },
      transPlayPause(value) {
        return value ? '暂停' : '播放'
      },
      transMutedOrNot(value) {
        return value ? '放音' : '静音'
      },
      transSpeed(value) {
        return '快进: x' + value
      }
    },
     created() {
      this.setControlList()
    }
}
</script>

<style scoped>
    .audio{
        font-size: 12px;
        margin:0 .15rem;
        clear: both;
        margin-top: 2.65rem;
        background: #fff;
        padding: 10px;
    }
    .audioTop img:nth-of-type(1){
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        float: left;
        margin-right: 0.1rem;
    }
    .audioTop img:nth-of-type(2){
        width: .24rem;
        height: .24rem;
        border-radius: 50%;
        clear: both;
    }
    .audioTop span{
        float: left;
        font-size: .16rem;
    }
    .audioTop .audioAll{
        float: right;
        height: .24rem;
        width: .86rem;
        background: #ff6b00;
        border-radius: .14rem;
        color: #fff;
        font-size: .11rem;
        text-align: center;
        line-height: .24rem;
    }
    .audioTop .ps{
        color: black;
    }
    .audioTop .pss{
        color: orange;
    }
    .floatMusic{
        width: 3.55rem;
        height: .5rem;
        background: #898888;
        position: fixed;
        bottom: 40px;
        left: 10px;;
        border-radius: 10px;
    }
    .floatMusic img{
        width:.34rem;
        height:.34rem;
        border-radius: 6px;
    }
</style>
