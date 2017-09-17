import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
<<<<<<< HEAD
import Home from '@/pages/Home'
import About from '@/pages/About'
import Stroll from '@/pages/Stroll'
import Order from '@/pages/Order'
import My from '@/pages/My'
=======
import Home from '@/pages/Home/Home'
import Nearby from '@/pages/Nearby'
import Visit from '@/pages/Visit'
import Order from '@/pages/Order'
import Me from '@/pages/Me'
>>>>>>> bf97d071776b89ddeaf5058ed8beb63ceb59561e

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
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
=======
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
>>>>>>> bf97d071776b89ddeaf5058ed8beb63ceb59561e
    }
  ]
})
