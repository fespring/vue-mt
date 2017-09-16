<template>
  <div id="app">
    <router-view></router-view>
    <template>
    <mu-tabs :value="activeTab" @change="handleTabChange" id="footer">
      <mu-tab value="/recents" icon="phone" title="RECENTS"/>
      <mu-tab value="/favorites" icon="favorite" title="FAVORITES"/>
      <mu-tab value="/nearbay" icon="person_pin" title="NEARBY"/>
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
