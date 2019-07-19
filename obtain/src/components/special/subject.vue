<template>
    <div>
        <router-link :to="{name:'Specialxq',params:{id:num}}">
            <div class="box">
                <img :src="img">
                <h3>{{title}}</h3>
                <p>{{time}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props:{
        img:String,
        title:String,
        time:String,
        num:String
    }
}
</script>

<style scoped>
    .box{
        /* width: 100%; */
        padding:0 0 10px 0;
        background: white;
        border-radius: 7px;
        margin: .3rem .15rem .3rem .15rem;
    }
    img{
        width:3.45rem;
        height:1.15rem;
        border-radius: 7px 7px 0 0;
    }
    h3{
        font-size:.16rem;
        margin: 10px 0 10px 10px;
        color:black;
    }
    p{
        font-size:.1rem;
        margin-left:10px;
        color:#878c97;
    }
</style>
