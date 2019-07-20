<template>
    <div class="box">
        <Nav></Nav>
        <div class="footer">
            <Subject v-for="(v,i) in arr" :key="i" :img="v.img[0].smallImage" :title="v.title" :time="v.time" :num="v.id"></Subject>
        </div>
    </div>
</template>

<script>
import Nav from '../components/special/nav'
import Subject from '../components/special/subject'
export default {
    components:{
        Nav,
        Subject
    },
    data() {
        return {
            arr:[]
        }
    },
    created() {
        this.axios({
            url:"/mock/data",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data.subject)
            this.arr=ok.data.subject
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
.footer{
    flex:1;
    width:100%;
    overflow-y:auto; 
}
</style>
