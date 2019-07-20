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
}

a{
	text-decoration: none;
}

img{
	display: block;
}
span{
	display: block;
}
</style>
