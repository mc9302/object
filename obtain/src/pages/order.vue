<template>
    <div class="orderContent">
        <div class="top">
            <i class="el-icon-circle-plus-outline"></i>
            <p>请填写收货地址</p>
        </div>
        <div class="shop">
            <p>店铺名称：商城</p>
            <div class="item" v-for="(v,i) in arr" :key="i">
                <div class="itemTop">
                    <img width="25%" :src="v.shopImgurl" alt="">
                    <div class="itemRight">
                        <p>{{v.shoptitle}}</p>
                        <div class="itemEnd">
                            <span>￥ {{v.price}}</span>
                            <span>x{{v.num}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[]
        }
    },
    created() {
        this.axios({
            url:"user/shopcart",
            method:"get",
            data:{
                username:"nihao"
            }
        }).then((ok)=>{
            this.arr = ok.data.shopcat
        })
    },
}
</script>

<style scoped>
    .orderContent{
        height: 100%;
        font-size: .225rem;
        background: #F5F5F5;
    }
    .top{
        display: flex;
        align-items: center;
        padding: .19rem;
        background: white;
        margin-bottom: .1rem;
    }
    .top span{
        color: #FF8C4C;
    }
    .top p{
        font-size: .125rem;
        padding-left: .1rem;
    }
    .shop{
        display: flex;
        background: white;
        padding: 0rem .1rem;
        flex-direction: column;
    }
    .shop p{
        font-size: .13rem;
        color: #6D6D6D;
        padding: .14rem 0rem;
    }
    .itemTop{
        display: flex;
        padding: .15rem 0rem;
        border-top: 1px solid #F0F0F0;

    }
    .itemEnd{
        display: flex;
        justify-content: space-between;
        font-size: .07rem;;
        color: #3C3C3C
    }
    .itemRight p{
        color: #3C3C3C;
    }
    .itemRight{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
