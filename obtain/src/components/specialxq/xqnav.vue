<template>
    <div class="navbox">
        <div class="box">
            <div class="nav" @click="func()">
                <img src="../../../static/tu/r/a/a2.jpg">
                <span>返回</span>
            </div>
            <p>{{title}}</p>
            <div class="right">
                <img @click="funa()" v-if="bool" src="../../../static/tu/r/a/a4.jpg">
                <img @click="funa()" v-else src="../../../static/tu/r/a/a5.jpg">
                <img @click="funb()" src="../../../static/tu/r/a7/a_j.png">
            </div>
        </div>
        <div class="fixed" v-if="fixeda">
            <img src="../../../static/tu/r/a/a6.jpg" alt="">
            已添加到我的收藏
        </div>
        <div class="fixed" v-if="fixedb">
            已取消收藏
        </div>
        <div class="top" v-if="bom" @click="funb()"></div>
        <div class="bom" v-if="bom">
            <div class="bottom">
                <ul>
                    <li><img src="../../../static/tu/r/a7/a8j.png"><span>微信</span></li>
                    <li><img src="../../../static/tu/r/a7/a8b.png"><span>朋友圈</span></li>
                    <li><img src="../../../static/tu/r/a7/a8c.png"><span>QQ</span></li>
                    <li><img src="../../../static/tu/r/a7/a8e.png"><span>新浪微博</span></li>
                    <li><img src="../../../static/tu/r/a7/a85.png"><span>复制链接</span></li>
                </ul>
            </div>
            <h5 @click="funb()">取消</h5>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bom:false,
            bool:true,
            fixeda:false,
            fixedb:false
        }
    },
    props:{
        title:String
    },
    methods:{
        funa(){
            this.bool=!this.bool
            if(this.bool==false){
                this.fixedb=false
                this.fixeda=true
                setTimeout(() => {
                    this.fixeda=false
                },600);
            }else if(this.bool==true){
                this.fixeda=false
                this.fixedb=true
                setTimeout(() => {
                    this.fixedb=false
                },600);
            }
        },
        funb(){
            this.bom=!this.bom
        },
        func(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .bottom li{
        width: 25%;
        height: 1rem;
        float: left;
        text-align: center;
    }
    .bottom img{
        width: .35rem;
        height: .35rem;
        margin: 20px auto;
    }
    .bottom span{
        font-size:.13rem;
        float: left;
        display: block;
        width: 100%;
        text-align: center;
    }
    .top{
        width:100%;
        height:100%;
        background: black;
        opacity: .3;
        position:fixed;
        bottom:0;
        left:0;
        z-index:5;
    }
    .bottom{
        width:100%;
        height: 2rem;
        background:white;
    }
    .bom h5{
        width: 100%;
        height: .5rem;
        text-align: center;
        line-height: .5rem;
        background:white;
        font-size:.15rem;
    }
    .bom{
        width: 100%;
        position:fixed;
        bottom:0;
        left:0;
        z-index:10;
    }
    .fixed img{
        margin:10px auto;
        width:.26rem;
        height:.19rem;
    }
    .fixed{
        width:2rem;
        border-radius: 7px;
        border:1px solid black;
        opacity: .85;
        background:white;
        position:fixed;
        top:50%;
        left:50%;
        margin-left:-1.06rem;
        margin-top:-0.46rem;
        line-height: .32rem;
        text-align: center; 
        font-size:.15rem;
    }
    .right img{
        width: .2rem;
        height: .2rem;
        float: left;
        margin-right:15px;
    }
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
    }
    .nav img{
        width:.1rem;
        height:.17rem;
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
