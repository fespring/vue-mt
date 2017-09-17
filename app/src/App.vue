<template>
  <div id="app">
    <router-view></router-view>
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" @change="handleChange" id="footer">
        <mu-bottom-nav-item value="/home" title="首页" icon="home"/>
        <mu-bottom-nav-item value="/nearby" title="附近" icon="pin_drop"/>
        <mu-bottom-nav-item value="/goshopping" title="逛一逛" icon="language"/>
        <mu-bottom-nav-item value="order" title="订单" icon="receipt"/>
        <mu-bottom-nav-item value="mine" title="我的" icon="person"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'recents'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val,
      this.$router.push(val)
    }
  }
}
</script>

<style>
html{
  font-size: 100px;
}
#footer{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
