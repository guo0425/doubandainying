<template>
    <div class="all">
      <div class="de-top">
          <img :src="list.images"/>
          <h3>{{list.title}}</h3>
      </div>
      <div>
          <h3>评分</h3>
<Start :item='list'></Start>
      </div>
      <div>
          <h3>简介</h3>
          {{list.summary}}
      </div>
    </div>
</template>
<script>
import Start from './Start'
export default {
    props:{

    },
    components:{
Start
    },
    data(){
        return {
            list:this.$route.query.item
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.all{
    width: 100%;
    height: 100%;
}
.de-top{
    width: 100%;
    height: 100px;
    display: flex;
}
</style>