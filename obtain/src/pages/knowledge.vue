<template>
    <div class="box">
        <div>
            <Knownav></Knownav>
        </div>
        <div class="footer">
            <Know v-for="(v,i) in arr" :key="i" :namea="v.namea" :time="v.time" :txt="v.txt" :nameb="v.nameb" :txta="v.txta" :title="v.title" :author="v.author" :transmit="v.transmit" :comment="v.comment" :good="v.good" :imga="v.imga" :imgb="v.imgb" :imgc="v.imgc"></Know>
        </div>
    </div>
</template>

<script>
import Knownav from '../components/knowledge/knownav'
import Know from '../components/knowledge/know'
export default {
    components:{
        Knownav,
        Know
    },
    data(){
        return {
            arr:[]
        }
    },
    created() {
        this.axios({
            url:"/mock/data",
            methods:"get"
        }).then((ok)=>{
            console.log(ok.data.knowledge)
            this.arr=ok.data.knowledge
        })
    },
}
</script>

<style scoped>
.box{
    height: 100%;
    width:100%;
    display:flex;
    flex-direction:column;
    background: #f7f7f8;
}
.footer{
    flex:1;
    overflow-y: auto;
}

</style>
