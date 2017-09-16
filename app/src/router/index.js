import Vue from 'vue'
import Router from 'vue-router'
import Recents from '@/pages/Recents'
import Favorites from '@/pages/Favorites'
import Nearbay from '@/pages/Nearbay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recents',
      name:'recents',
      component:Recents
    },
    {
      path:'/favorites',
      name:'favorites',
      component:Favorites
    },
    {
      path:'/nearbay',
      name:'nearbay',
      component:Nearbay
    }
  ]
})
