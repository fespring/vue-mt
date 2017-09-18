import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/pages/Home/Home'
import Recent from '@/pages/Recent'
import Guang from '@/pages/Guang'
import Order from '@/pages/Order'
import Me from '@/pages/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/recent',
      name: 'recent',
      component: Recent
    },
    {
      path: '/guang',
      name: 'guang',
      component: Guang
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }
  ]
})
