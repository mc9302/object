<template>
    <div class="block">
        <div class="swiper-container" ref="slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(v,i) in imgArr" :key="i">
                    <router-link :to="{path:'/specialxq',query:{id:v.id}}">
                    <img :src="v.imgUrl" class="imgs"/>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import Swiper from 'swiper'
export default {
    name:"banner",
    data() {
        return {
            imgArr:[
                {id:1,imgUrl:"../../../static/image/lun_01.jpg"},
                {id:2,imgUrl:"../../../static/image/lun_02.jpg"},
                {id:3,imgUrl:"../../../static/image/lun_03.jpg"},
                {id:4,imgUrl:"../../../static/image/lun_04.jpg"},
            ]
        }
    },
    mounted(){
        new Swiper (this.$refs.slider, {
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable :true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
        })
    }
}
</script>

<style scoped>
    .imgs{
        width: 3.45rem;
        height:1.15rem;
        margin-left: 0.15rem;
        margin-top: 0.48rem;
    }
    
</style>
