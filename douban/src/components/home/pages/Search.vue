<template>
    <div>
<input type="text" v-model="val" @keydown="inputUp()">
<ul>
    <li v-for='(item,index) in list' :key='index'>{{item.title}}</li>
</ul>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            val:'',
            list:[]
        }
    },
    computed:{

    },
    methods:{
        inputUp(){
         this.http(this.val)
        },
        http(){
            this.axios.get('/api/v2/movie/search?q='+this.val).then(({data})=>{
              this.list=data.subjects
            })
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>