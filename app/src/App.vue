<template>
  <div id="app">
    <router-view></router-view>
    <template>
    <mu-tabs :value="activeTab" @change="handleTabChange" id="footer">
      <mu-tab value="/firstpage" icon="phone" title="首页"/>
      <mu-tab value="/goshopping" icon="favorite" title="逛一逛"/>
      <mu-tab value="/nearbay" icon="person_pin" title="附近"/>
      <mu-tab value="/order" icon="person_pin" title="订单"/>
      <mu-tab value="/mine" icon="person_pin" title="我的"/>
    </mu-tabs>
</template>
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
      this.$router.push(val)
    }
  }
}
</script>

<style>
#footer{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
