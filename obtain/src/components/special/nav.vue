<template>
    <div class="navbox">
        <div class="box">
            <div class="nav" @click="funa()">
                <img src="../../../static/tu/r/a/a2.jpg">
                <span>返回</span>
            </div>
            <p>专题</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        funa(){
            this.$router.go(-1)
        }
    },
}
</script>

<style scoped>
    .navbox{
        width:100%;
    }
    .box{
        background: white;
        padding: .15rem 0 .15rem 15px;
        position: relative;
    }
    .nav{
        height: .17rem;
        width: .44rem;
    }
    img{
        width:.1rem;
        height:.17rem;
        float: left;
        margin-right: 5px;
    }
    span{
        font-size:.14rem;
        float:left;
        color:#999999;
    }
    p{
        float:left;
        font-size:.15rem;
        margin: 0 auto;
        position:absolute;
        left: 45%;
        top:.15rem;
        font-weight: 400px;
    }
</style>
