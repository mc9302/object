<template>
    <div class="block">
        <el-carousel height="178px">
            <el-carousel-item v-for="(v,i) in imgs" :key="i">
                <img :src="v.src" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    props:{
        src:String,
        name:String
    },
    data() {
        return {
            imgs:[
                {src:"../../static/images/banner1.png",name:"1"},
                {src:"../../static/images/banner2.png",name:"2"},
                {src:"../../static/images/banner1.png",name:"3"},
                {src:"../../static/images/banner2.png",name:"4"}
            ]
        }
    },
}
</script>

<style scoped>
    img{
        width: 3.75rem;
        height: 1.78rem;
    }
</style>
