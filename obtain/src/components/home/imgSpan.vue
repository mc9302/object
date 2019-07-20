<template>
    <div>
        <div v-for="(v,i) in newarr" :key="i" class="cArr">
            <router-link :to="v.link">
                <img :src="v.imgUrl">
                <span>{{v.title}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        newarr:Array
    }
}
</script>

<style scoped>
    .cArr{
        float: left;
        font-size:12px;
        text-align: center;
        margin: 0.2rem 0.11rem 0 0.11rem;
    }
    .cArr img{
        height: .40rem;
        width: .52rem;
    }
    .cArr span{
        font-size: .11rem;
        color: #333333;
    }
</style>
