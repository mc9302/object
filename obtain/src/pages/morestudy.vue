<template>
    <div>
        <Course v-for="(v,i) in nenglixueyuan " :key="i" :data="v"></Course>
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
            nenglixueyuan:[]
        }
    },
    created(){
        // 请求对应字段的数据
           this.axios({
                url:'/link/data',
                method:'get'
            }).then((ok)=>{
                this.nenglixueyuan=ok.data.nenglixueyuan
            })
    },
}
</script>
<style scoped>
</style>

