<template>
<div>
    <router-view></router-view>
    <mu-paper>
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
            <mu-bottom-nav-item value="1" title="Recents" icon="restore" to="/home"/>
            <mu-bottom-nav-item value="2" title="Favorites" icon="favorite" to="/fj"/>
            <mu-bottom-nav-item value="3" title="Nearby" icon="location_on" to="/g"/>
            <mu-bottom-nav-item value="4" title="Nearby" icon="location_on" to="/dd"/>
            <mu-bottom-nav-item value="5" title="Nearby" icon="location_on" to="/wd"/>
        </mu-bottom-nav>
    </mu-paper>  
</div>
</template>

<script>

export default {
  data () {
    return {
      bottomNav: '1'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>
<style >
    .mu-paper{
        position:fixed;
        bottom:0;
        left:0;
        right:0;
    }
</style>