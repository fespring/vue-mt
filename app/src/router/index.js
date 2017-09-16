import Vue from 'vue'
import Router from 'vue-router'
import Firstpage from '@/pages/Recents'
import Goshopping from '@/pages/Favorites'
import Nearbay from '@/pages/Nearbay'
import Order from '@/pages/Order'
import Mine from '@/pages/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/firstpage',
      name:'firsepage',
      component:Firstpage
    },
    {
      path:'/goshopping',
      name:'goshopping',
      component:Goshopping
    },
    {
      path:'/nearbay',
      name:'nearbay',
      component:Nearbay
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
