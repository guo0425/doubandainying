// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
Vue.config.productionTip = false
    //引入axios
Vue.prototype.axios = axios
    //引入全部组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})