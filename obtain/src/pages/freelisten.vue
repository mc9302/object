<template>
    <div class="content">
        <div class="fiexd">
          <div class="topback" >
                    <span class="arrow" @click="tohome()">
                    <i class="el-icon-arrow-left"></i>返回</span>
                    <span class="total">试听《刘晗讲辛普森案》</span>
            </div>
            <div class="listen_title">
                <span>你可以任选<span class="word">2</span>节课,免费体验学习（发刊词不占用免费试读名额）。</span>
            </div>
        </div>
        <div class="end">
            <Freelisten v-for="(v,i) in arr" :key="i" :data="v"></Freelisten>
        </div>
        
    </div>
</template>
<script>
import Freelisten from '../components/freelisten'
export default {
    components:{
        Freelisten
    },

    data() {
        return {
            arr:[
                {leftword:"发刊词",middle:"|",rightword:"为什么今天我们还要重讲辛普森案"},
                {leftword:"01理解被告",middle:"：",rightword:"为什么美国法律如此保护“罪犯”"},
                {leftword:"02理解陪审团",middle:"：",rightword:"为什么要找十二个“法盲”来认定事实"},
                {leftword:"03理解检察官",middle:"：",rightword:"控方的权利到底有多大？"},
                {leftword:"04理解辩护律师",middle:"：",rightword:"如何用立场扭曲显示"},
                {leftword:"05理解法官",middle:"：",rightword:"绝对中立能够实现吗？"},
                {leftword:"06理解证人",middle:"：",rightword:"什么样的证据最关键"},
                {leftword:"07理解被害人",middle:"：",rightword:"谁来保护沉默的“弱者”？"},
                {leftword:"08媒体的作用",middle:"：",rightword:"摄像机应该进法庭吗？"},
                {leftword:"09法学家的批判",middle:"：",rightword:"这是不是一场公正的审判？"},

            ]
        }
    },
    methods: {
          tohome(){
            this.$router.push("/details")
        },
    },
}
</script>
<style scoped>
.content{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.fiexd{
    height: 1.32rem;
    background: #fefefe;
}
.topback{
     padding: 0 .16rem;
    height:.5rem; ;
     line-height: .5rem;
    font-size: .2rem;
}
.topback .arrow{
    color: #999999;
    margin-right: .9rem;
}
.topback .total{
    color: #171717;
    font-weight: bolder;
    position: absolute;
    top:0;
    left: .925rem;
}
.listen_title{
    width: 100%-0.22rem;
    height: 0.74rem - 0.275rem ;
    background: #f8edd7;
    font-size: .14rem;
    padding: .22rem .275rem;
    letter-spacing: 4px;
}
.listen_title .word{
    display: inline;
    color: #ea762d;
}
.listen_list{
    height: .84rem -0.25rem;
    width: 100% -0.2rem;
    border-bottom: 2px solid #e7e7e7;
    padding: .2rem .25rem;
}
.listen_list .top{
    display: flex;
    justify-content:space-around;
    flex-wrap: nowrap;
    font-size: .17rem;
    color: #333333;
    margin-bottom: .19rem;
  
}
.bottom .bottom_left{
    display: flex;
    flex-wrap: nowrap;
}
.bottom .bottom_right{
    margin-left: 1.45rem;
    display: flex;
}
/* .bottom .bottom_right .button{
    font-size: .225rem;
} */
.listen_list .bottom{
    font-size: .1rem;
    color: #9c9c9c;
}
.end{
    flex: 1;
    overflow-y:auto; 
}
</style>

