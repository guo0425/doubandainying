<template>
    <div>
    <div v-for='(key,val,index) in list' :key="index">
   
        <p>{{key.title}} <span @click="tomore(key.title)">更多</span></p>
       <ul>
        
           <li v-for="(item,index) in key.moveList.subjects" :key='index' @click="toDetail(item)">
               <img :src='item.images.large'>
               <p>{{item.title}}</p>
               {{item.rating.stars}}
               <Start :item='item'></Start>
           </li>
       </ul>
    </div>
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
          list:{
            coming:{},
            theaters:{},
            top250:{}
          }
        }
    },
    computed:{
        ...mapState(['coming','theaters','top250'])
    },
    methods:{
        http(url,key,title){
          
            this.axios.get(url).then(({data})=>{
              this.changeList(data,key,title)
            })
        },
        changeList(res,key,title){
           this.list[key]={
               title,
               moveList:res
           }
        //   console.log(this.list[key].moveList.subjects[0])
        },
        tomore(title){
           this.$router.push({path:'/more',query:{title}})
        },
        toDetail(item){
           this.$router.push({path:'/detail',query:{item}})
        }
    },
    created(){

    },
    mounted(){
        this.http(this.coming,'coming','最近上映')
        this.http(this.theaters,'theaters','热门电影')
        this.http(this.top250,'top250','top250')
    }
}
</script>
<style scoped lang="">
ul{
    white-space: nowrap;
    overflow-x: auto;
}
ul li{
    display: inline-block;
    vertical-align: top;
    margin: 20px;
}
img{
    width: 100px;
    height: 150px;
}
span{
    float: right;
    color: #42bd56;
}
</style>