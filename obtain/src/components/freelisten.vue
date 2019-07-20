<template>
    <div>
    
          <div class="listen_list">
              <p class="top">
                  <span>{{data.leftword}}{{data.middle}}{{data.rightword}}</span>
                  <!-- <span>{{data.middle}}</span>
                  <span>{{data.rightword}}</span> -->
              </p>
              <div class="bottom">
                  <div class="bottom_left">
                      <span>08分36秒</span>
                      <span>|</span>
                      <span>13484人学过</span>
                     <div class="bottom_right">
                        <span class="button"><i class="iconfont icon-bofang"></i></span>
                        <span class="start">播放</span>
                     </div>
                  </div>
                </div>
          </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:["data"],
    methods: {
          tohome(){
            this.$router.push("/details")
        },
    },
}
</script>
<style scoped>

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
    /* justify-content:space-around; */
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
</style>

