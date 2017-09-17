// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

//引用Muse UI
import 'muse-components/styles/base.less' // 加载基础的样式
import Paper from 'muse-components/paper'
import bottomNav from 'muse-components/bottomNav/bottomNav'
import bottomNavItem from 'muse-components/bottomNav/bottomNavItem'
import appBar from 'muse-components/appBar'
import textField from 'muse-components/textField'
import flatButton from 'muse-components/flatButton'
import iconButton from 'muse-components/iconButton'

Vue.component(Paper.name, Paper)
Vue.component(bottomNav.name, bottomNav)
Vue.component(bottomNavItem.name, bottomNavItem)
Vue.component(appBar.name, appBar)
Vue.component(textField.name, textField)
Vue.component(flatButton.name, flatButton)
Vue.component(iconButton.name, iconButton)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
