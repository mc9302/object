<template>
    <div class="footerContent">
        <router-link to="/shop">
            <div class="item">
                <span class="iconfont icon-store_icon"></span>
                <p>商城</p>
            </div>
        </router-link>
        <router-link to="/shop">
            <div class="item">
                <span class="iconfont icon-all"></span>
                <p>全部商品</p>
            </div>
        </router-link>
        <router-link to="/shopcart">
            <div class="item">
                <span class="iconfont icon-gouwuche"></span>
                <p>购物车</p>
            </div>
        </router-link>
        <router-link to="/shop">
            <div class="item">
                <span class="iconfont icon-dingdan"></span>
                <p>订单</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .footerContent{
        width: 100%;
        height: .58rem;
        display: flex;
        justify-content: space-around;
        background: white;
        align-items: center;
        flex-direction: row;
    }
    .item{
        text-align: center;
    }
    .iconfont{
        font-size: .18rem;
    }
    a{
        color: #333333;
    }
</style>
