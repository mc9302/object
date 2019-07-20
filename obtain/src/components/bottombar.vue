<template>
    <div>
        <div class="bottombar">
            <span class="givefriend" @click="togivefriend()">赠送好友</span>
            <span class="verticalline">|</span>
            <span class="freelisten" @click="tofreelisten()">免费试听</span>
            <span class="buy">购买：19.90得到贝</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        togivefriend(){
            this.$router.push("/givefriend");
        },
        tofreelisten(){
            this.$router.push("/freelisten");
        }
    },
}
</script>
<style scoped>
.bottombar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #e7e7e7;
    width: 3.75rem;
    height: .58rem;
    position: fixed;
    bottom: 0;
    background: #ffffff;
}

.givefriend{
    font-size:.095rem;
      color: #898989;   
}
.freelisten{
      font-size:.16rem;
       color: #5e5e5e;
}
.bottombar span{
    font-size: .16rem;
}
.buy{
    width: 1.51rem;
    height: .395rem;
    line-height: .395rem;
    background: #ea752f;
    border-radius: 15px;
    color: #f5ffff;
    text-align: center;
}
.verticalline{
    color: #e6e6e6;
}
</style>

