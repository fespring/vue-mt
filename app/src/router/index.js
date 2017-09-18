import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/pages/Home/Home'
import Nearby from '@/pages/Nearby/Nearby'
import Visit from '@/pages/Visit/Visit'
import Order from '@/pages/Order/Order'
import Me from '@/pages/Me/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/nearby',
      name: 'Nearby',
      component: Nearby
    },
    {
      path: '/visit',
      name: 'Visit',
      component: Visit
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
