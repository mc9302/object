<template>
    <div class="block">
        <div class="swiper-container" ref="slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(v,i) in slides" :key="i">
                    <!-- <router-link :to="{name:'BookDetail',params:{id:slide.id}}"> -->
                    <img :src="v.img_url"/>
                    <!-- </router-link> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import Swiper from 'swiper'
export default {
    name: "Slider",
    props:{
        src:String,
        name:String
    },
    data() {
        return {
            slides:[
                    {id:1,img_url:'../../static/images/banner1.png'},
                    {id:2,img_url:'../../static/images/banner2.png'}
                ],
        }
    },
    mounted(){
        new Swiper (this.$refs.slider, {
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            // 如果需要滚动条
            scrollbar: '.swiper-scrollbar',
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
    img{
        width: 3.75rem;
        height: 1.78rem;
    }
</style>
