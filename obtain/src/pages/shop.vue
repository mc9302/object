<template>
    <div class="content">
        <div class="header">
            <header>首页</header>
        </div>
        <div class="middle">
            <SwiperBanner></SwiperBanner>
            <img class="bookLogo" src="../../static/images/book1.png" alt="">
            <div class="search" @click="skip()">
                <i class="el-icon-search"></i>
                <input class="el-input" type="text" placeholder="输入关键字搜索商品" >
            </div>
            <div class="shopItems">
                <Items v-for="(v,i) in arr" :key="i" class="items" :imgSrc="v.imgSrc" :goodsTitle="v.goodsTitle" :goodsIntro="v.goodsIntro" :integer="v.integer" :bigPrice="v.bigPrice" :time="v.time"></Items>
            </div>
        </div>
        <ShopFooter class="footer"></ShopFooter>
    </div>
</template>

<script>
import Items from "../componrnts/shop/shopitems"
import Banner from "../componrnts/banner/banner"
import ShopFooter from "../componrnts/shop/shopFooter"
import SwiperBanner from "../componrnts/banner/swiperBanner"
export default {
    data() {
        return {
            arr:[
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"},
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"},
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"},
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"},
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"},
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"},
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"},
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"},
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"},
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"},
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"},
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"},
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"},
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"},
                {imgSrc:"../../static/images/shop1.png",goodsTitle:"「童心•折纸」系列 18K玫瑰金Akoya珍珠项链",goodsIntro:"在爱的人生远航中，无论风雨，深情陪伴",integer:"2998",bigPrice:"3399",time:"yes"}
            ]
        }
    },
    components:{
        Banner,
        Items,
        ShopFooter,
        SwiperBanner
    },
    methods: {
        skip(){
            this.$router.push("/shopSearch");
        }
    },
    
}
</script>

<style scoped>
    .content{
        font-size: 0.08rem;
        background: #F5F5F5;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    header{
        height: .45rem;
        width: 100%;
        text-align: center;
        line-height: .45rem;
        font-size: .12rem;
        
    }
    .search{
        display: flex;
        border: 1px solid #cccccc;
        border-radius: 4px;
        margin: 10px 10px 0px 10px;
        padding: .06rem 0rem;
    }
    .bookLogo{
        width: 100%;
        margin-top: .1rem;
    }
    .el-input{
        border: 0px;
        color: #CDCDCD;
        font-size: .14rem;
        outline:none;
        background: #F5F5F5;
        
    }
    .el-icon-search{
        width: 10%;
        text-align: center;
        font-size: 18px;
        color: #CDCDCD;
    }
    .shopItems{
        margin: 10px 5px 0px 5px;
        overflow: hidden;
        border-radius: 3px;
    }
    .items{
        width: 47%;
        margin: .1rem 5px;
        float: left;
    }
    .middle{
        flex: 1;
        overflow-y: auto;
    }
    .header{
        width: 100%;
        background: #F5F5F5;
    }
</style>
