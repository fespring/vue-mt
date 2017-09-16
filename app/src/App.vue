<template>
  <div id="app">
    <router-view></router-view>

    <mu-paper id="footer">
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
      
        <mu-bottom-nav-item value="/home" title="首页" icon="home"/>
        <mu-bottom-nav-item value="/recent" title="附近" icon="pin_drop"/>
        <mu-bottom-nav-item value="/guang" title="逛一逛" icon="language"/>
        <mu-bottom-nav-item value="/order" title="订单" icon="assignment"/>
        <mu-bottom-nav-item value="/me" title="我的" icon="account_circle"/>
      </mu-bottom-nav>
  </mu-paper>

  </div>
</template>

<script>

import Vue from 'vue'
import 'muse-components/styles/base.less' // 加载基础的样式

import Paper from 'muse-components/paper'
import bottomNav from 'muse-components/bottomNav/bottomNav'
import bottomNavItem from 'muse-components/bottomNav/bottomNavItem'
Vue.component(Paper.name, Paper)
Vue.component(bottomNav.name, bottomNav)
Vue.component(bottomNavItem.name, bottomNavItem)

export default {
  data () {
    return {
      bottomNav: '/home'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val

      this.$router.push(val);


    }
  }
}

</script>

<style>
#footer {
  position:fixed;
  left:0;
  right:0;
  bottom:0;
}
</style>
