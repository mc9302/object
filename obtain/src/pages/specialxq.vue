<template>
    <div class="box">
        <Xqnav :title="arr.title"></Xqnav>
        <div class="ss">
            <img :src="topImage">
            <img :src="authorImage">
            <p>{{arr.txt}}</p>
        </div>
    </div>
</template>

<script>
import Xqnav from './../components/specialxq/xqnav'
export default {
    components:{
        Xqnav
    },
    data() {
        return {
            arr:{},
            topImage:{},
            authorImage:{}
        }
    },
    created(){
        this.axios({
            url:"/mock/data",
            methods:"get",
        }).then((ok)=>{
            console.log(ok)
            ok.data.subject.forEach((v,i)=>{
                if(v.id==this.$route.params.id){
                    this.arr=v;
                    this.topImage=v.img[1].topImage;
                    this.authorImage=v.img[2].authorImage
                }
            })
        })
    },
}
</script>

<style scoped>
    .box{
        height:100%;
        background:#f8f9fa;
        display: flex;
        flex-direction: column;

    }
    .ss{
        flex:1;
        font-size:24px;
        overflow-y:auto; 

    }
    img{
        width:100%;
        height:3.9rem;
    }
    p{
        font-size:.16rem;
        margin: .5rem .25rem .5rem .25rem;
        line-height:.3rem;
    }
</style>
