<template>
    <div>
        <div class="top">
           <div class="position">
                <h2 class="banner-title">{{details.books_details.banner_title}}</h2>
                 <p class="banner-summary">{{details.books_details.banner_summary}}</p>
           </div>
        </div>
         <div class="classabout">
             <div class="left">
                <span class="spanleft">{{details.interface.class_num}}讲</span>
                <p class="smalltitle">总讲数</p>
             </div>
            <div class="right">
                <span class="spanright">{{details.interface.study_peoples}}人</span>
                <p class="smalltitle">加入学习</p>  
            </div> 
         </div>
        <div class="content">
            <p class="section_one">
                <span class="teacher_intro">{{details.books_details.teacher_intro}}</span>
                <span class="teacher_info">{{details.books_details.teacher_info}}</span>
            </p>
            <p class="section_two">
                <span class="course_feature">{{details.books_details.course_feature}}</span>
                <span class="course_feature_intro_I">{{details.books_details.course_feature_intro_I}}</span>
                <span  class="course_feature_intro_II">{{details.books_details.course_feature_intro_II}}</span>
            </p>
        </div>
        <div class="course_outline">
            <h2 class="course_outline_title">{{details.books_details.course_outline}}</h2>
            <p class="nowlisten">

            </p>
        </div>
        <div class="purchaseattention">
            <h2 class="purchase_attention">{{details.books_details.purchase_attention}}</h2>
            <ol>
                <li v-for="(v,i) in details.books_details.purchase_attention_item" :key="i">{{v}}</li>
            </ol>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
             details:this.$route.query.id,
        }
    },
}
</script>
<style scoped>
.top{
    background-image: url("../../static/img/details.jpg");
    background-size: 100%  2.115rem;
    width: 100%-0.205rem;
    height: 2.115rem;
    padding: 0 0 0 .205rem;
    position: relative;
}
.position{
    padding-top: 1.375rem;
}
.classabout{
    box-sizing: border-box;
    display: flex;
    background: #f7f7f7;
    font-size: .09rem;
    width: 3.745rem;
    height: .69rem;
    padding: .17rem;
}
.classabout span{
    font-weight: bolder;
    font-size: .23rem;
}
.content{
    padding: 0 .263rem 0 .2rem;
}
.content span{
    letter-spacing: 3px;
}
.smalltitle{
  color: #8e8d92;
}
.left{
    text-align: center;
    width: 50%;
    border-right: 2px solid #e4e4e4;
}
.right{
    text-align: center;
    width: 50%;
}
.teacher_intro{
    font-size: .17rem;
    font-weight: bolder;
    color: #363636;
    line-height: .6rem;
}
.teacher_info{
    font-size: .15rem;
    color: #373737;
     line-height: .22rem;
}
.course_feature{
    font-size: .17rem;
    font-weight: bolder;
    color: #363636;
     line-height: .6rem;
}
.course_feature_intro_I{
    font-size: .15rem;
    color: #373737;
    margin-bottom: .285rem;
}
.course_feature_intro_II{
    font-size: .15rem;
    color: #373737;
    margin-bottom: .285rem;
}
.section_one{
    margin-bottom: .25rem;
}
 .banner-title {
    font-weight: 600;
    font-size: .235rem;
    color: #fff;
    width: 100%;
}
.banner-summary {
    width: 100%;
    padding-top: .133333rem;
    font-size: .14rem;
    color: #fff;
}
.content{
    border-bottom: .1rem solid #f7f7f7;
}
.course_outline{
     padding: 0 .263rem 0 .2rem;
}
.course_outline_title{
    font-size: .17rem;
    font-weight: bolder;
    color: #363636;
     line-height: .6rem;
}
.purchaseattention{
     padding: 0 .263rem 0 .2rem;
      border-top: .1rem solid #f7f7f7;
}
.purchase_attention{
    font-size: .17rem;
    font-weight: bolder;
    color: #363636;
     line-height: .6rem;
}
ol li{
    font-size: .15rem;
    color: #616161;
    letter-spacing: 3px;
}
</style>
