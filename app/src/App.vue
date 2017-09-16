<template>
<div>
  <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="/home" icon="home" title="首页" href="#/home"/>
        <mu-tab value="/fj" icon="home" title="附近" href="#/fj"/>
        <mu-tab value="/g" icon="home" title="逛一逛" href="#/g"/>
        <mu-tab value="/dd" icon="home" title="订单" href="#/dd"/>
        <mu-tab value="/wd" icon="home" title="我的" href="#/wd"/>
  </mu-tabs>
  <router-view></router-view>
</div>

</template>

<script>

export default {
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
      // this.$router.push(val)
    }
  }
}
</script>
<style >
    .mu-tabs{
        position:fixed;
        bottom:0;
        left:0;
        right:0;
    }
</style>