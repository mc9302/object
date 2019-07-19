<template>
    <div class="all">
        <div class="allTop">
            <p>每天听本书</p><router-link to="/listen"><span>全部</span></router-link>
        </div>
        <div class="flot">
            <img src="../../../static/image/lun_01.jpg">    
            <div>
                <p>《{{subtitle}}》</p>
                <span>{{courseFeatureIntroI}}</span>
                <span>21分44秒</span>
            </div>
            <span class="price">{{booksSprice}}得到贝</span>
        </div>
        <div class="goodBook">
            <p class="goods">精选书单</p>
            <img src="../../../static/image/lun_01.jpg"> 
            <div>
                <p>巴拉巴拉巴拉巴</p>
                <span>啊实打实的撒的撒打算打算三生三世三所所所所所在现场</span>
                <div>共3本</div><div>1.2万人看过</div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props:{
        subtitle:String,
        courseFeatureIntroI:String,
        booksSprice:String
    }
}
</script>

<style scoped>
    .all{
        float: left;
        font-size: 12px;
        margin-left: 0.15rem;
        margin-right: .15rem;
        margin-top: .22rem;
        background: #ffffff;
        padding: 0 10px;
    }
    .allTop{
        clear: both;
        line-height: .52rem;
        height: .52rem;
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: .15rem;
    }
    .allTop p{
        float: left;
        font-size: .17rem;
    }
    .allTop span{
        float: right;
        font-size: .14rem;
        color: #ff6b00;
    }
    .flot{
        float: left;
        padding-bottom: .15rem;
        margin-bottom: .15rem;
        border-bottom: 1px solid #e5e5e5;
    }
    .flot p{
        font-size: .14rem;
        margin-bottom: .11rem;
    }
    .flot span{
        font-size: .12rem;
        color:#858585;
        display: block;
        line-height: .20rem;
    }
    .flot img{
        width:.83rem;
        height: 1.1rem;
        float: left;
        border-radius: 8px;
        margin-right: .12rem;
    }
    .flot .price{
        float: right;
        color: #ff6b00;
    }
    .goodBook img{
        width:.83rem;
        height: .83rem;
        float: left;
        border-radius: 8px;
        margin-right: .12rem;
    }
    .goodBook div p{
        font-size: .14rem;
        margin-bottom: .11rem;
    }
    .goodBook div span{
        font-size: .12rem;
        color:#858585;
        display: block;
        margin-bottom: .06rem;
    }
    .goodBook div div{
        display: inline-block;
        color: #888d98;
    }
    .goods{
        clear: both;
        font-size: .13rem;
        margin-bottom: .17rem;
    }
</style>
