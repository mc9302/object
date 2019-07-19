<template>
    <div class="content">
        <div class="header">
            <div class="top">
                <span class="topLeft">
                    <router-link to="/shop">
                        商城
                    </router-link>
                </span>
                <span @click="change()" v-if="bool">编辑</span>
                <span @click="change()" v-else>完成</span>
            </div>
            <div v-if="divBool" class="noOne">
                您还没添加任何商品哟~
            </div>
            <div v-else class="item" v-for="(v,i) in arr" :key="i">
                <div class="itemTop">
                    <div class="check">
                        <el-checkbox @click="checkBtn(i)" v-model="v.checked"></el-checkbox>
                    </div>
                    <img width="25%" :src="v.shopImgurl" alt="">
                    <div class="itemRight">
                        <p>{{v.shoptitle}}</p>
                        <div class="itemEnd">
                            <span>￥ {{v.price}}</span>
                            <div class="shopBtn">
                                <button @click="minus(i)" class="jian">-</button>
                                <p class="num">{{v.num}}</p>
                                <button @click="addNum(i)" class="add">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="buy">
                <div class="payFor">
                    <el-checkbox @click="allChecked()" v-model="checked">全选</el-checkbox>
                </div>
                <div class="money">
                    <span v-show="bool">合计：￥{{total}}.00</span>
                </div>
                <div @click="order()" v-if="bool" class="goTo">
                    去支付
                </div>
                <div @click="del()" v-else class="goTo">
                    删除
                </div>
            </div>
            <ShopFooter class="foot"></ShopFooter>
        </div>
    </div>
</template>

<script>
import ShopFooter from "../componrnts/shop/shopFooter"
export default {
    data() {
        return {
            arr:[],
            checked: true,
            tatal:0,
            bool:true,
            divBool:true
        }
    },
    methods: {
        checkBtn(index){
            this.arr[index].checked = !this.arr[index].checked
        },
        addNum(index){
            this.arr[index].num = this.arr[index].num + 1
        },
        minus(index){
            if(this.arr[index].num>1){
                this.arr[index].num = this.arr[index].num - 1
            }
        },
        allChecked(){
            this.checked = !this.checked;
        },
        change(){
            this.bool = !this.bool;
            this.checked = !this.checked;
        },
        del(){
            for(let i =0;i<this.arr.length;i++){
                if(this.arr[i].checked == true){
                    this.arr.splice(i,1);
                    i = i-1;
                }
            }
        },
        order(){
            this.$router.push("/order")
        }
    },
    computed: {
        total(){
            this.tatal = 0;
            for(let i = 0;i<this.arr.length;i++){
                if(this.arr[i].checked === true){
                    this.tatal += this.arr[i].price*this.arr[i].num;
                }
            }
            return this.tatal
        },
    },
    watch: {
        checked(val){
            if(val===true){
                for(let i = 0;i<this.arr.length;i++){
                    this.arr[i].checked = true
                }
            }else{
                for(let i = 0;i<this.arr.length;i++){
                    this.arr[i].checked = false
                }
            }
        },
        arr(val){
            if(val.length>0){
                this.divBool = false;
            }else{
                this.divBool = true;
            }
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
    components:{
        ShopFooter,
    }
}
</script>


<style scoped>
    .content{
        height: 100%;
        background: #F5F5F5;
        font-size: .16rem;
        display: flex;
        flex-direction: column;
    }
    .header{
        padding: .15rem .1rem ;
        flex: 1;
        overflow: auto;
    }
    .top{
        padding: 0rem .1rem;
        display: flex;
        justify-content: space-between;
        font-size: .12rem;
        color: #515151;
    }
    a{
        color: #4B4B4B;
    }
     .itemTop{
        display: flex;
        align-items: center;
        background: white;
        border-radius: .07rem;
        padding: .13rem 0rem;
        margin-top: .1rem;
    }
    .check{
        width: 15%;
        text-align: center;
    }
    .el-checkbox{
        
        margin: 0;
    }
    .itemRight{
        font-size: .12rem;
        width: 55%;
    }
    .itemEnd{
        width: 100%;
        display: flex;
        align-items: center;
    }
    .itemRight p{
        margin-bottom: .2rem;
    }
    .itemEnd span{
        width: 40%;
        color: #FF803A;
        font-size: .16rem;
    }
    .buy{
        height: .5rem;
        background: white;
        border-bottom: 1px solid #C6C6C6;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0rem .1rem;
        box-sizing: border-box;
    }
    .payFor{
        width: 35%;
    }
    .money{
        color: #FF803A;
        width: 35%;
    }
    .goTo{
        padding: .1rem .25rem;
        background: #FF803A;
        border-radius: .20rem;
        color: white;
    }
    .foot{
        font-size: .08rem;
    }
    .shopBtn{
        display: flex;
        align-items: center;
        width: 60%;
    }
    .shopBtn button{
        width: 30%;
        height: .26rem;
        background: white;
    }
    .jian{
        border: 2px solid #E3E3E3;
        border-right: 0px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .add{
        border: 2px solid #E3E3E3;
        border-left: 0px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }
    .shopBtn .num{
        width: 30%;
        height: .26rem;
        box-sizing: border-box;
        margin: 0;
        border: 2px solid #E3E3E3;
        text-align: center;
        line-height: .26rem;
    }
    .noOne{
        font-size: .07rem;
        color: #4B4B4B;
        text-align: center;
        padding: .1rem 0rem;
    }
</style>
