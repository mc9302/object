<template>
    <div class="box">
        <div class="content">
            <div class="block">
                <div class="swiper-container" ref="slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(v,i) in arr.shopColorImgurl" :key="i">
                            <img :src="v"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="middle">
                <p class="price">￥{{arr.saleSprice}}.00</p>
                <h4>{{arr.shoptitle}}</h4>
                <p class="hint">{{arr.shopSummary}}</p>
                <div class="sofar">
                    <span>{{arr.express}}</span>
                    <span>发货地：{{arr.location}}</span>
                </div>
            </div>
            <router-link to="/shop">
                <div class="back">
                    <span>
                        进入首页
                    </span>
                    <span>></span>
                </div>
            </router-link>
            <div class="bottom">
                <div class="bottom-top" id="more">
                    <a href="#more" class="colorStyle">商品详情</a>
                    <a href="#problem">常见问题</a>
                </div>
                <div class="bottom-middle">
                    <p>查看订单：打开App>我的>购买记录>实物订单</p>
                    <p>本实物商品只能使用微信或者支付宝购买，无法用得到App“账户余额”支付购买</p>
                </div>
                <div class="img">
                    <img width="100%" v-for="(v,i) in arr.showpicture" :key="i" :src="v" alt="">
                </div>
                <div id="problem">
                    <img width="100%" src="../../static/images/problem.jpg" alt="">
                </div>
                <div class="footerIm">
                    <img width="100%" src="../../static/images/footer1.jpg" alt="">
                    <img width="100%" src="../../static/images/footer2.jpg" alt="">
                    <img width="100%" src="../../static/images/footer3.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="footer">
        <div class="left">
            <router-link to="/shop">
                <div class="cart-item">
                    <span class="iconfont icon-store_icon"></span>
                    <p>商城</p>
                </div>
            </router-link>
            <router-link to="/shopcart">
                <div class="cart-item">
                    <span class="iconfont icon-gouwuche"></span>
                    <p>购物车</p>
                </div>
            </router-link>
            <div  v-if="show" class="grayDiv" @click="show = false"></div>
        </div>
        <div class="right">
            <p class="car" @click="show = true">加入购物车</p>
            <p class="buy">立即购买</p>
        </div>
        <transition name="slide-fade">
            <div class="bottomP" v-if="show">
                <i class="el-icon-circle-close" @click="show = false"></i>
                <div class="bottomTop">
                    <img width="18%" src="../../static/images/img1.jpg" alt="">
                    <div class="bottomTopRight">
                        <p>{{arr.shoptitle}}</p>
                        <span>￥{{colorPrice}}.00</span>
                    </div>
                </div>
                <div class="bottomMidd">
                    <p class="smallP">颜色</p>
                    <el-button @click="count(i)" plain v-for="(v,i) in arr.color" :key="i">{{v.text}}</el-button>
                </div>
                <div class="bottomNum">
                    <p class="smallP">数量</p>
                    <el-input-number v-model="num1" :min="1" label="描述文字"></el-input-number>
                </div>
                <div class="bottomTotal">
                    <p>共计：￥ {{total}}</p>
                </div>
                <div class="bottomEnd">
                    加入购物车
                </div>
            </div> 
        </transition>
        
    </div>
    </div>
    
    
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import Swiper from 'swiper'
    // import ShopCost from '../componrnts/shop/shopCost'
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
            arr:this.$route.query.content,
            show: false,
            num1: 1,
            colorPrice:this.$route.query.content.color[0].price
        }
    },
    computed: {
        total(){
            return this.colorPrice*this.num1;
        }
    },
    methods: {
        count(num){
            this.colorPrice = this.$route.query.content.color[num].price
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
    .box{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .content{
        font-size: .16rem;
        background: #F5F5F5;
        flex:1; 
        overflow-y:auto; 
    }
    .swiper-slide img{
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
        font-size: .26rem;
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
        padding: .16rem .08rem;
        display: flex;
        justify-content: space-between;
        font-size: .14rem;
        color: #333333;
    }
    .back a{
        font-size: .14rem;
        color: #333333;
    }
    .bottom{
        background: white;
    }
    .bottom-top{
        display: flex;
        box-sizing: border-box;
        padding: 0rem .06rem;
    }
    .bottom-top a{
        width: 50%;
        text-align: center;
        padding: .25rem 0rem;
        color: #666666;
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
    .footer{
        display: flex;
        height: .6rem;
    }
    .left{
        width: 35%;
        display: flex;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        background: #F7F7F7;
    }
    .left a{
        width: 50%;
    }
    .cart-item{
        height: .6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #333333;
    }
    .cart-item p{
        font-size: .12rem;
    }
    .right{
        width: 65%;
        display: flex;
        align-items: center;
        font-size: .14rem;
        color: white;
    }
    .car{
        width: 50%;
        text-align: center;
        background: #FFA124;
        height: .6rem;
        line-height: .6rem;
    }
    .buy{
        width: 50%;
        text-align: center;
        background: #FF803A;
        height: .6rem;
        line-height: .6rem;
    }
    .el-dialog__header{
        padding: 0;
    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(10px);
        opacity: 0;
    }
    .bottomP{
        position: fixed;
        bottom: 0px;
        display: flex;
        flex-direction: column;
        padding: .2rem;
        padding-bottom: 0px;
        font-size: .16rem;
        background: white;
        z-index: 2;
        box-sizing: border-box;
    }
    .bottomMidd{
        border-top: 1px solid #F3F3F3;
        border-bottom: 1px solid #F3F3F3;
        padding: .15rem 0px;
    }
    .bottomNum{
        padding: .15rem 0px;
    }
    .bottomTop{
        display: flex;
    }
    .bottomTotal{
        border-top: 1px solid #F3F3F3;
        border-bottom: 1px solid #F3F3F3;
        padding: .15rem 0px;
    }
    .el-icon-circle-close{
        position: absolute;
        top: 5px;
        right: 2px;
        width: .3rem;
        height: .3rem;
        color: #333333;
    }
    .grayDiv{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0px;
        right: 0px;
        background: gray;
        opacity: .3;
        z-index: 1;
    }
    .bottomEnd{
        width: 100%;
        text-align: center;
        color: white;
        background: #FFA125;
        height: .5rem;
        line-height: .5rem;
    }
    .bottomTopRight span{
        color: #FFA125;
    }
    .smallP{
        color: #333333;
        font-size: .12rem;
        margin-bottom: 3px;
    }
</style>
