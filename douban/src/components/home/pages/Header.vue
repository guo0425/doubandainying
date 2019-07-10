<template>
  <div class="head">
    <h3>豆瓣</h3>
   <div class="inp" @click="toSearch()">搜索</div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    toSearch(){
      console.log(this.$router)
        this.$router.push({path:'/find'})
  // this.$router.push({path:"/search"})
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.head {
 
  left: 0;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  justify-content: flex-start;
  align-items: center;
  padding: 0 18px;
  background: #fff;
  height: 47px;
  box-sizing: border-box;
  display: flex;
  h3 {
color: #00b600;
  }
}
.inp{
  width: 70%;
  height: 30px;
  border: 1px solid #ccc;
  line-height: 30px;
  margin: 0 auto;
}
</style>