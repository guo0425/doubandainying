import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import More from '@/components/home/pages/More'
import Deatil from '@/components/home/pages/Deatil'
import Find from '@/components/home/pages/Search'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/more',
        name: 'More',
        component: More
    }, {
        path: '/detail',
        name: 'Detail',
        component: Deatil
    }, {
        path: '/find',
        name: 'Find',
        component: Find
    }]
})