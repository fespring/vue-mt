<template>
<div>
 
  <router-view></router-view>
  <mu-tabs :value="activeTab" @change="handleTabChange" id="footer">
    <mu-tab value="/home"  icon="home" title="首页"/>
    <mu-tab value="/recent" icon="pin_drop" title="附近"/>
    <mu-tab value="/guang" icon="language" title="逛一逛"/>
    <mu-tab value="/order" icon="assignment" title="订单"/>
    <mu-tab value="/me" icon="account_circle" title="我的"/>
  </mu-tabs>
</div>
</template>

<script>

import Vue from 'vue'
import 'muse-components/styles/base.less' // 加载基础的样式
import Tabs from 'muse-components/tabs/tabs'
import Tab from 'muse-components/tabs/tab'
Vue.component(Tabs.name, Tabs)
Vue.component(Tab.name, Tab)

export default {
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
    
      this.activeTab = val

       this.$router.push(val);
    }
    
  }


}
</script>


<style scope>
    #footer{
      position:fixed;
      left:0;
      bottom:0;
      right:0;
      z-index:1;
    }
</style>