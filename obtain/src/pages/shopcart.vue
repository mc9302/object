<template>
    <div class="content">
        <div class="header">
            <div class="top">
                <span class="topLeft">商城</span>
                <span>编辑</span>
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
    .content{
        height: 100%;
        background: #F5F5F5;
    }
    .header{
        padding: .15rem .1rem ;
    }
    .top{
        padding: 0rem .1rem;
        display: flex;
        justify-content: space-between;
        font-size: .12rem;
        color: #515151;
    }
</style>
