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
    },
    
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