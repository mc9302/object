<template>
    <div class="search">
        <input type="search" placeholder="如何用手机拍出高赞大片" class="intSearch" @focus="fun()">
        <!-- <div>
            <img src="">
            <span>发现</span>
        </div> -->
        <i class="el-icon-message"></i>
        <img src="../../../static/tu/r/a7/a1j.png" class="imgSearch">
    </div>
</template>

<script>
export default {
    methods: {
        fun(){
            //ajax
            this.$router.push({path:"/searchs"})
        }
    },
}
</script>

<style scoped>
    .search{
        width: 100%;
        /* position: relative; */
        height: 36px;
        position: fixed;
        top: 0;
        font-size: 12px;
        z-index: 99;
        background: #f7f7f8;
    }
    .intSearch{
        width: 3.05rem;
        height: 0.36rem;
        border-radius: 8px;
        border:0px;
        padding-left: 0.35rem;
        background: #f0f0f0;
        outline:none;
        margin-left: 0.15rem;
    }
    .imgSearch{
        width: 0.16rem;
        height: 0.16rem;
        position:absolute;
        top: 10px;
        left: 0.25rem;
    }
    .search i{
        font-size: .22rem;
        margin-left: .17rem;
    }
</style>
