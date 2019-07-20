<template>
    <div class="content">
          <div class="topback" >
                <span class="arrow" @click="tohome()">
                <i class="el-icon-arrow-left"></i>返回</span>
                <span class="total">送给好友</span>
          </div>
           <div class="end">
          <div class="section_I">
              <div class="top">
                  <div class="left">
                      <img src="../../static/img/author.jpg">
                  </div>
                  <div class="right">
                        <h2 class="booksname">刘晗讲辛普森案</h2>
                        <span class="validity">赠送有效期至：2020.07.17</span>
                        <span class="price"><strong class="num">19.90</strong>得到贝/份</span>
                  </div>
              </div>
                <div class="add">
                    <div class="add-left"><span>份数</span></div>
                    <div class="add-right">
                        <span @click="minus()">-</span>
                        <span>{{num}}</span>
                        <span @click="add()">+</span>
                    </div>
                </div>
                <div class="list">
                    <p>2份</p>
                    <p>5份</p>
                    <p>10份</p>
                    <p>50份</p>
                </div>
                <div class="peoplecart">
                    <span class="cart">优惠券</span>
                    <span class="selectcard">选择优惠券&nbsp;></span>
                </div>
                <div class="alipay">
                    <span class="alipaymethods">支付方式<strong>:</strong></span>
                    <div class="handle">
                        <div class="left">
                            <span class="logo"><img src="../../static/img/money.jpg" alt=""></span>&nbsp;
                            <span class="balance">余额</span> &nbsp;
                            <span class="unit"><strong>0.00</strong>得到贝</span>&nbsp;
                            <span class="nomoney">(不足支付)</span>
                        </div>
                        <div class="right">
                            <span>充值</span>
                        </div>
                    </div>
                </div>
                <div class="attention">
                    <ul>
                        <li>购买后可在365天内赠送给任意好友，过期商品将无法再被领取</li>
                        <li>你即将购买的商品为虚拟服务,购买后不支持退订、转让、退还、请酌情确认。</li>
                    </ul>
                </div>
               
          </div>
         </div>
          <div class="payfor">
                <p class="spanlist">
                    <span>应付：<strong>19.90得到贝</strong><i style="color:#939393;">^</i></span>
                    
                </p>
                <div class="makesure">
                    <span>确认支付</span>
                </div>
          </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num:1,
        }
    },
    methods: {
         tohome(){
            this.$router.push("/details")
        },
       add(){
            this.num=num++;
        }
    },
}
</script>
<style scoped>
.content{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.topback{
     padding: 0 .16rem;
    height:.5rem; ;
     line-height: .5rem;
    font-size: .2rem;
    position: relative;

}
.end{
    flex: 1;
    overflow-y: auto;
}
.topback .arrow{
    color: #999999;
    /* margin-right: .9rem; */
    position: absolute;
    left: .16rem;
}
.topback .total{
    color: #676767;
    font-weight: bolder;
    /* position: absolute;
    top:10px;
    left: 1.8rem;    */
    text-align: center;
}
.right .booksname{
    font-size: .175rem;
    color: #2c2c2c;
     line-height: .25rem;
}
.right .validity{
    font-size: .13rem;
    color: #aaaaaa;
    line-height: .25rem;
    margin-top: .095rem;
    margin-bottom: .095rem;
}
.right .price{
     color: #f36f27;
    font-size: .08rem;
     line-height: .25rem;
}
.right .num{
    color: #f36f27;
    font-size: .16rem;

}
.section_I .top{
    display: flex;
}
.top{
    margin:10px 10px auto;
    }
.top .left{
     margin-right: .2rem;
}
.top .left img{
    width: 1.021rem;
    height: 1.36rem;
}
.right{
    padding-top:  .11rem;
}
.top{
    border-bottom: 1px solid #e7e7e7;
    padding-bottom: .125rem;
}

.add{
    display: flex;
    height: .1rem;
    width: 100%; 
    justify-content: space-between;
    align-items: center;  
     margin-top: .2rem;
} 
.add-left{
    font-size: .17rem;
    margin-left: 10px;
}
.add-right{
   font-size: .17rem;
    display: flex;
    width:60px;
    justify-content: space-between;
    margin-right: 10px;
}
.list p{
     font-size: .17rem;
     width:.74rem ;
     height:.285rem ;
     border: 2px solid #939393;
     text-align: center;
     border-radius: .15rem;
}
.list{
    display: flex;
    justify-content: space-around; 
    margin-top: .2rem;
    border-bottom: 2px dashed #e7e7e7;
  padding-bottom: .2rem;
}
.peoplecart{
    display: flex;
    padding: .2rem .12rem;
    justify-content: space-between; 
    
}
.peoplecart span{
    font-size: .16rem;
}
.peoplecart .selectcard{
    color: #9b9b9b;
}
.alipaymethods{
    font-size: .16rem;
    margin-left: 10px;
}
.handle .left .logo img{
    width: .44rem;
    height: .44rem;
}
.handle .left span,.handle .right span{
    font-size: .16rem;
}
.handle .left{
    display: flex;
    line-height: .5rem;
    font-size: .34rem;
}
.handle{
    display:flex;
    justify-content: space-around;
     line-height: .5rem;
     margin-top: .325rem;
}
.handle .right{
    line-height: .305rem;
    font-size: .34rem;
    color: #fefcff;
    width: .765rem;
    height: .32rem;
    text-align: center;
    background: #ff6808;
    border-radius: .14rem;
}
.handle .right span{
    vertical-align: middle;
}
.left .unit{
    color: #ea762d;
}
.attention ul li{
    list-style: disc;
    font-size: .16rem;
    margin-top: .27rem;
    color: #939393;
      margin-left: 10px;
}
.payfor{
    display: flex;
    height: .59rem;
    flex-direction: row;
    flex-shrink: 1;
    line-height: .59rem;
    background: #f7f7f7;
     position: relative;

}
.payfor strong{
    color:  #ff6808;
}
.payfor .spanlist{
      margin-left: 10px;
      display: flex;
      flex-shrink: 1;
      flex-wrap: nowrap;
}
.payfor span{
     font-size: .16rem;
}
.makesure{
    padding-top: 10px;
}
   
.makesure span{
    width: 1.5rem;
     height: .385rem;
    line-height: .385rem;
    color: #f5f5f5;
    margin-left: .7rem;
    background:   #ff6808;  
    text-align: center;
    vertical-align: middle;
    border-radius: .3rem;
}
</style>

