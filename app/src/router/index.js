import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home/Home'
import fj from '@/components/FJ/FJ'
import g from '@/components/G/G'
import dd from '@/components/DD/DD'
import wd from '@/components/WD/Wd'


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
      component: home
    },
    {
      path: '/fj',
      name: 'fj',
      component: fj
    },
    {
      path: '/g',
      name: 'g',
      component: g
    },
    {
      path: '/dd',
      name: 'dd',
      component: dd
    },
    {
      path: '/wd',
      name: 'wd',
      component: wd
    },
  ]
})
