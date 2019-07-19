<template>
    <div class="footer">
        <div class="left">
            <router-link to="shop">
                <div class="cart-item">
                    <span class="iconfont icon-store_icon"></span>
                    <p>商城</p>
                </div>
            </router-link>
            <router-link to="shop">
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
                    <img width="18%" src="../../../static/images/img1.jpg" alt="">
                    <div class="bottomTopRight">
                        <p>【七夕送礼】独家首发 | 优集「深爱四叶草」珐琅项链礼盒</p>
                        <span>￥628.00</span>
                    </div>
                </div>
                <div class="bottomMidd">
                    <p class="smallP">颜色</p>
                    <el-button plain>夜空蓝</el-button>
                    <el-button plain>招财红</el-button>
                </div>
                <div class="bottomNum">
                    <p class="smallP">数量</p>
                    <el-input-number v-model="num1" @change="handleChange" :min="1" label="描述文字"></el-input-number>
                </div>
                <div class="bottomTotal">
                    <p>共计：￥ 0</p>
                </div>
                <div class="bottomEnd">
                    加入购物车
                </div>
            </div> 
        </transition>
        
    </div>
</template>

<script>
export default {
    data() {
      return {
        show: false,
        num1: 1
      };
    },
    methods: {

    },
    props:{
        
    }
}
</script>

<style scoped>
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
