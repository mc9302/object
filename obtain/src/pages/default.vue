<template>
    <div>
        <Course v-for="(v,i) in  kexuexueyuandata " :key="i" :data="v"></Course>
        
    </div>
</template>
<script>
import Course from '../components/course'

export default {
    components:{
         Course,
    
    },
     data(){
        return {
            kexuexueyuandata:[]
        }
    },
    created(){
        // 请求对应字段的数据
           this.axios({
                url:'/link/data',
                method:'get'
            }).then((ok)=>{
                this.kexuexueyuandata=ok.data.kexuexueyuan
            })
    },
}
</script>
<style scoped>

</style>