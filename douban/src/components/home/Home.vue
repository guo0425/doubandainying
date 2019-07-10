<template>
  <div class="web">
    <Header></Header>
    <List></List>
  </div>
</template>
<script>
import Header from "./pages/Header";
import List from "./pages/List";
export default {
  props: {},
  components: {
    Header,
    List
  },
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
.web {
  width: 100%;
  height: 100%;
}
</style>