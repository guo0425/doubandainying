<template>
    <div>
<!-- {{}} -->
<ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="(item,index) in subjects" :key='index' @click="toDetail(item)">
     <img :src="item.images.large">
     <Start :item='item'></Start>
     {{item.rating.average}}
      </li>
</ul>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import Start from './Start'
export default {
    props:{

    },
    components:{
Start
    },
    data(){
        return {
             url:'',
			subjects:[],
			start:0, //开始值
			count:10 //结束值 （死值）
        }
    },
    computed:{
        ...mapState(['coming','theaters','top250'])
    },
    methods:{
      http(url){
          this.axios.get(url).then(({data})=>{
             this.changeData(data.subjects)
          })
      },
      changeData(res){
          let arr=[]
          if(this.start>10){
             
              arr=this.subjects.concat(res)
          }else{
              //不触底 最开始的数据
              arr=res
          }
          this.start+=this.count
          this.subjects=arr
   
      },
      	loadMore(){//触底 时调用

			let url  = this.url+"?start="+this.start+"&count=10";//改变数据 一次是10条
			this.http(url);
        },
        toDetail(item){
            this.$router.push({path:'/detail',query:{item}})
        }
    },
    created(){

    },
    mounted(){
          let title = this.$route.query.title;//获取当前点击的那个title
          switch(title){
              case '最近上映':
                  this.url=this.coming;
               break;
                case '热门电影':
                  this.url=this.theaters;
               break;
                case 'top250':
                  this.url=this.top250;
               break;
          }
          this.http(this.url)
    }
}
</script>
<style scoped lang="">

</style>