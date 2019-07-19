<template>
    <div>
        <Search></Search>
        <Banner></Banner>
        <Imgspan :newarr="classArr"></Imgspan>
        <div v-for="(v,i) in navArr" :key="i" class="nav"> 
            <router-link :to="{path:'/nav',query:{title:v.title}}">
                 <img :src="v.imgUrl">
                <span>{{v.title}}</span>
            </router-link>
        </div>
        <div v-for="(item, index) in audios" :key="index+111">
            <Audio :theUrl="item.url" :theControlList="item.controlList"/>
        </div>
        <Homelisten v-for="(v,i) in listenArr" :key="i+11111" :subtitle="listenArr[0].interface.subtitle" :courseFeatureIntroI="listenArr[0].booksDetails.courseFeatureIntroI" :booksSprice="listenArr[0].interface.booksSprice"></Homelisten>
        <Homebooks></Homebooks>
    </div>
</template>

<script>
import Search from '../components/home/search'
import Banner from '../components/home/banner'
import Imgspan from '../components/home/imgSpan'
import Homelisten from '../components/home/homelisten'
import Homebooks from '../components/home/homebooks'
import Audio from '../components/home/audio'
export default {
    components:{
        Search,
        Banner,
        Imgspan,
        Homelisten,
        Homebooks,
        Audio
    },
    data() {
        return {
            classArr:[
                {imgUrl:"../../static/tu/r/f/a3r.png",title:"课程",link:"/course"},
                {imgUrl:"../../static/tu/r/f/a3y.png",title:"听书",link:"/listen"},
                {imgUrl:"../../static/tu/r/f/a3p.png",title:"电子书",link:"/eBook"},
                {imgUrl:"../../static/tu/r/f/a3v.png",title:"商城",link:"/shop"},
                {imgUrl:"../../static/tu/r/f/a3t.png",title:"专题",link:"/special"}
            ],
            navArr:[
                {imgUrl:"../../static/image/nav_01.png",title:"经济学",link:"/course"},
                {imgUrl:"../../static/image/nav_02.png",title:"医学健康",link:"/course"},
                {imgUrl:"../../static/image/nav_03.png",title:"社会学",link:"/course"},
                {imgUrl:"../../static/image/nav_04.png",title:"心理学",link:"/course"},
                {imgUrl:"../../static/image/nav_05.png",title:"免费专区",link:"/course"},
                {imgUrl:"../../static/image/nav_06.png",title:"讲座",link:"/course"},
                {imgUrl:"../../static/image/nav_07.png",title:"管理学",link:"/course"},
                {imgUrl:"../../static/image/nav_08.png",title:"职场",link:"/course"},
                {imgUrl:"../../static/image/nav_09.png",title:"得到大学",link:"/course"},
                {imgUrl:"../../static/image/nav_10.png",title:"全部分类",link:"/nav"},
            ],
            listenArr:[],
            audios: [
                {
                url: './static/falling-star.mp3',
                controlList: 'onlyOnePlaying'
                }
            ]
        }
    },
    created() {
        this.axios({
            url:"/sss/csss",
            methods:"get"
        }).then((ok)=>{
            this.listenArr = ok.data.listenBooks
        })
    },
}
</script>

<style scoped>
    .nav{
        float: left;
        width: 20%;
        font-size: 12px;
        text-align: center;
        margin-top: .2rem;
    }
    .nav img{
        width: .32rem;
        height: .32rem;
        margin: 0 auto;
        margin-bottom: 10px;
        border-radius: 50%;
    }
    .nav span{
        font-size: .11rem;
        color: #333333;
    }
</style>
