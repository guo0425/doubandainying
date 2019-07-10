<template>
  <div class="start">


    <span v-for="(num,ind) in [1,2,3,4,5]" :key="ind">
   
      <img v-if="item.rating.stars/10>=ind+1" 
      src="@/assets/img/star_fill_whole.png" />


      <img v-else-if="item.rating.stars/10>=ind&&
      item.rating.stars%10!=0"
      src="@/assets/img/star_fill_half.png" />


      <img v-else
      src="@/assets/img/star_fill_none.png" />
    </span>
  </div>
</template>
<script>
export default {
  props: ["item"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.start img {
  width: 15px;
  height: 15px;
}
</style>