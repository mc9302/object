<template>
<div class="box">
    <div class="content">
        <div class="block">
            <div class="swiper-container" ref="slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(v,i) in slides" :key="i">
                        <img :src="v.img_url"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="middle">
            <p class="price">398.00-888.00</p>
            <h4>【七夕送礼】独家首发 | 优集「挚爱红豆」手工珐琅项链手链套装</h4>
            <p class="hint">这个七夕，用「挚爱红豆」向她表心意</p>
            <div class="sofar">
                <span>快递：申通</span>
                <span>发货地：上海</span>
            </div>
        </div>
        <div class="back">
            <span>进入首页</span>
            <span>></span>
        </div>
        <div class="bottom">
            <div class="bottom-top">
                <p class="colorStyle">商品详情</p>
                <p>常见问题</p>
            </div>
            <div class="bottom-middle">
                <p>查看订单：打开App>我的>购买记录>实物订单</p>
                <p>本实物商品只能使用微信或者支付宝购买，无法用得到App“账户余额”支付购买</p>
            </div>
            <div class="img">

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
    components:{

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
    .content{
        font-size: .16rem;
        background: #F5F5F5;
    }
    img{
        width: 100%;
        height: 3.75rem;
    }
    .middle{
        display: flex;
        flex-direction: column;
        padding: .1rem;
        background: white;
    }
    .price{
        color: #FF803A;
        font-size: .18rem;
    }
    h4{
        margin: .1rem 0rem;
    }
    .middle .hint{
        font-size: .06rem;
        color: #999999;
        margin-bottom: .07rem;
    }
    .sofar{
        display: flex;
        justify-content: space-between;
        padding: .07rem 0rem;
        border-top: 1px solid #F0F0F0;
        font-size: .06rem;
        color: #676767;
    }
    .back{
        margin: .1rem 0rem;
        background: white;
        padding: .08rem;
        display: flex;
        justify-content: space-between;
        font-size: .07rem;
        color: #333333;
    }
    .bottom{
        background: white;
    }
    .bottom-top{
        display: flex;
        box-sizing: border-box;
        padding: .25rem .06rem;
    }
    .bottom-top p{
        width: 50%;
        text-align: center;
    }
    .colorStyle{
        border-bottom: 2px solid #FAA577;
        color: #FAA577;
    }
    .bottom-middle{
        line-height: .32rem;
        padding: 5px 10px .20rem;
        border: 1px solid #E2E2E2;
        color: #595959;
        font-size: .06rem;
        font-weight: 900;
    }
    .img{
        min-height: 10rem;
    }
</style>
