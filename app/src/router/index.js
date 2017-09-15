import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Stroll from '@/pages/Stroll'
import Order from '@/pages/Order'
import My from '@/pages/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/about',
      name: 'About',
      component: About
    },{
      path: '/stroll',
      name: 'Stroll',
      component: Stroll
    },{
      path: '/order',
      name: 'Order',
      component: Order
    },{
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
