<template>
    <div>
        <Course v-for="(v,i) in totaldata " :key="i" :data="v"></Course>

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
            totaldata:[]
        }
    },
    created(){
        // 请求对应字段的数据
           this.axios({
                url:'/link/data',
                method:'get'
            }).then((ok)=>{
                this.totaldata=ok.data.total
            })
    },
}
</script>
<style scoped>
span{
    font-size: .14rem;
}
</style>

