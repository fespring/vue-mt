<template>
  <div >
    <mu-paper id = "footer">
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="/home" title="首页" icon="home"/>
        <mu-bottom-nav-item value="/nearby" title="附近" icon="pin_drop"/>
        <mu-bottom-nav-item value="/visit" title="逛一逛" icon="language"/>
        <mu-bottom-nav-item value="/order" title="订单" icon="assignment"/>
        <mu-bottom-nav-item value="/me" title="我的" icon="account_circle"/>
      </mu-bottom-nav>
  </mu-paper>
    <router-view></router-view>
  </div>
</template>

<script>
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
  },
  mounted (){
    this.bottomNav = this.$route.path;
  }
}
</script>

<style lang="less">
#footer {
  position:fixed;
  left:0;
  bottom:0;
  right:0;
  z-index:1;
}
#footer .mu-buttom-item{
  min-width: 0.5rem;
}
</style>
