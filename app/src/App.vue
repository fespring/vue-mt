<template>
<<<<<<< HEAD
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
 
=======
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
  }
>>>>>>> bf97d071776b89ddeaf5058ed8beb63ceb59561e
}

</script>

<<<<<<< HEAD
<style scope>

</style>
=======
<style>
#footer {
  position:fixed;
  left:0;
  bottom:0;
  right:0;
}
</style>
>>>>>>> bf97d071776b89ddeaf5058ed8beb63ceb59561e
