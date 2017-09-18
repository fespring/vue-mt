// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'


import 'muse-components/styles/base.less' 
// 加载基础的样式
import appBar from 'muse-components/appBar'
import avatar from 'muse-components/avatar'

import paper from 'muse-components/paper'
import bottomNav from 'muse-components/bottomNav/bottomNav'
import bottomNavItem from 'muse-components/bottomNav/bottomNavItem'

import flatButton from 'muse-components/flatButton/flatButton'
import textField from 'muse-components/textField/textField'

import iconButton from 'muse-components/iconButton/iconButton'

import flexbox from 'muse-components/flexbox/flexbox'
import flexboxItem from 'muse-components/flexbox/flexboxItem'


import list from 'muse-components/list/list'
import listItem from 'muse-components/list/listItem'
import infiniteScroll from 'muse-components/infiniteScroll/infiniteScroll'
import divider from 'muse-components/divider/divider'





Vue.component(appBar.name, appBar)
Vue.component(avatar.name, avatar)
Vue.component(paper.name, paper)
Vue.component(bottomNav.name, bottomNav)
Vue.component(bottomNavItem.name, bottomNavItem)
Vue.component(flatButton.name, flatButton)
Vue.component(textField.name, textField)
Vue.component(iconButton.name, iconButton)
Vue.component(flexbox.name, flexbox)
Vue.component(flexboxItem.name, flexboxItem)
Vue.component(list.name, list)
Vue.component(listItem.name, listItem)
Vue.component(infiniteScroll.name, infiniteScroll)
Vue.component(divider.name, divider)




import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
