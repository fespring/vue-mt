import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/pages/Main/Main'
import Home from '@/pages/Main/Home/Home'
import Recent from '@/pages/Main/Recent'
import Guang from '@/pages/Main/Guang'
import Order from '@/pages/Main/Order'
import Me from '@/pages/Main/Me'



import meiShi from '@/pages/meiShi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:"main",
      component: Main,
      children:[
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
    },
    {
      path:'/meishi',
      name:"meishi",
      component: meiShi
    }
  ]
})
