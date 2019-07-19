<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

@import "assets/icon/iconfont.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,td,input,textarea,select,option{
	margin: 0;
	padding: 0;
}

html{
	font-size: 26.67vw;
}

html,body{
	height: 100%;
}
body{
	font-family: "微软雅黑";
  background-color: #f7f7f8;
}
ul,ol,li{
	list-style:none;
}
a{
	text-decoration: none;
}

img{
	display: block;
}
.el-carousel__indicators--horizontal{
        bottom: -10px;
}
.el-carousel__button{
	width: 15px;
    height: 3px;
}
</style>
