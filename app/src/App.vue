<template>
  <div id="view">
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
html,body{
  height:100%;
}
#view{
  width:100%;
  height:100%;
  position:relative;
}

#footer {
  position:absolute;
  left:0;
  right:0;
  bottom:0;
}
</style>
