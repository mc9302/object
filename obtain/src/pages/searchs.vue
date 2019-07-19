<template>
    <div class="search">
        <input v-model="issue_content" type="search" placeholder="如何用手机拍出高赞大片" class="intSearch" @input="funa()"><span @click="funa()">搜索</span><span @click="cancel()">取消</span>
        <div class="serch_result" v-show="serch_result_issue">
            <li v-for="item in searchData" :key="item.length">
            {{ item.name }}
            </li>
        </div>
        <img src="../../static/tu/r/a7/a1j.png" class="imgSearch">
    </div>
</template>

<script>
export default {
    data() {
        return {
            issue_content:"",//输入框中的内容
            serch_result_issue:false,//控制搜索的问题显示隐藏
            serch_result:[
                {name:"我是谁?"},
                {name:"我是谁事实上"},
                {name:"我是谁阿大声大声大声"},
                {name:"萨达是大肆宣传 恤"},
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"},  
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"}

            ]
        }
    },
    methods: {
        cancel(){
            this.$router.go(-1)
        },
        funa(){
            if(this.issue_content.length>0){
                this.serch_result_issue = true;
            }else{
                this.serch_result_issue = false
            }
        
        }
    },
    computed: {
        searchData() {
        var issue_content = this.issue_content;
        if (issue_content) {
            return this.serch_result.filter(function(product) {
            return Object.keys(product).some(function(key) {
                return String(product[key]).toLowerCase().indexOf(issue_content) > -1
            })
            })
        }
        return this.products;
        }
    }
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
        width: 2.85rem;
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
    .search span{
        margin-left: 6px;
    }
</style>
