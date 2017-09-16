import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import fj from '@/components/fj'
import g from '@/components/g'
import dd from '@/components/dd'
import wd from '@/components/wd'

Vue.use(Router)

export default new Router({
  routes: [
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
