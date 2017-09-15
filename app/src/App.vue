<template>
 <div>
  
  <mt-tabbar v-model="selected">  
    <mt-tab-item id="/">
      <img slot="icon" src="./assets/logo.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="/about">
      <img slot="icon" src="./assets/logo.png">
      附近
    </mt-tab-item>
    <mt-tab-item id="/stroll">
      <img slot="icon" src="./assets/logo.png">
      逛一逛
    </mt-tab-item>
    <mt-tab-item id="/order">
      <img slot="icon" src="./assets/logo.png">
      订单
    </mt-tab-item>
    <mt-tab-item id="/my">
      <img slot="icon" src="./assets/logo.png">
      我的
    </mt-tab-item>
  </mt-tabbar>

  <router-view></router-view>
</div>
</template>

<script>

export default {     
  data(){
      return { selected: '/'}
  },
  //监控属性
  watch: {
    selected (val) {
      this.$router.push(val);
    }
  }, 
 
}

</script>

<style scope>

</style>