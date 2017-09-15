<template>
<div>
 
  <router-view></router-view>
  <mu-tabs :value="activeTab" @change="handleTabChange" id="footer">
    <mu-tab value="/home"  icon="phone" title="首页"/>
    <mu-tab value="/recent" icon="favorite" title="FAVORITES"/>
    <mu-tab value="/guang" icon="person_pin" title="NEARBY"/>
    <mu-tab value="/order" icon="person_pin" title="NEARBY"/>
    <mu-tab value="/me" icon="person_pin" title="NEARBY"/>
  </mu-tabs>
</div>
</template>

<script>

import Vue from 'vue'
import 'muse-components/styles/base.less' // 加载基础的样式
import Tabs from 'muse-components/tabs/tabs'
import Tab from 'muse-components/tabs/tab'
// ..
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