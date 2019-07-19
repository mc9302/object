<template>
    <div class="navbox">
        <div class="box">
            <div class="nav" @click="fun()">
                <img src="../../../static/tu/r/a7//a1h.png">
            </div>
            <p>知识城邦</p>
            <div class="right">
                <img src="../../../static/tu/r/a/a7.jpg">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        fun(){
            this.$router.push("/searchs")
        }
    }
}
</script>

<style scoped>
    .right img{
        width: .28rem;
        height: .28rem;
        float: left;
        margin-right:15px;
    }
    .navbox{
        width:100%;
        border-bottom:.5px solid #9999;
    }
    .box{
        background: white;
        padding: .15rem 0 .15rem 15px;
        position: relative;
    }
    .nav{
        height: .17rem;
    }
    .nav img{
        width:.28rem;
        height:.28rem;
        float: left;
        margin-right: 5px;
    }
    .nav span{
        font-size:.14rem;
        float:left;
        color:#999999;
    }
    p{
        width:1.9rem;
        float:left;
        font-size:.15rem;
        margin: 0 auto;
        position:absolute;
        left: 25%;
        top:.15rem;
        font-weight: 400px;
        text-align: center;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .right{
        position: absolute;
        top:.15rem;
        right: 0rem;
        float: left;
        height: 20px;
    }
</style>
