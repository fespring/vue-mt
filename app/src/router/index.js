import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Nearby from '@/pages/Nearby'
import Goshopping from '@/pages/Goshopping'
import Order from '@/pages/Order'
import Mine from '@/pages/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name:'home',
      component:Home
    },
    {
      path:'/goshopping',
      name:'goshopping',
      component:Goshopping
    },
    {
      path:'/nearby',
      name:'nearby',
      component:Nearby
    },
    {
      path:'/order',
      name:'order',
      component:Order
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine
    }
  ]
})
