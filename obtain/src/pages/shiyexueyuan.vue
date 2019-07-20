<template>
    <div>
        <div class="topimg">
            <img src="../../static/img/shiyexueyuan.jpg">
        </div>
        <Course v-for="(v,i) in shiyexueyuandata " :key="i" :data="v"></Course>
    </div>
</template>
<script>
import Course from '../components/course'
export default {
    components:{
         Course
    },
     data(){
        return {
            shiyexueyuandata:[]
        }
    },
    created(){
        // 请求对应字段的数据
           this.axios({
                url:'/link/data',
                method:'get'
            }).then((ok)=>{
                this.shiyexueyuandata=ok.data.shiyexueyuan
            })
    },
}
</script>
<style scoped>
.topimg img{
    width:3.44rem;
    height:.84rem;
}
.topimg{
       padding: .15rem;
       background: #f7f7f8;
}
</style>