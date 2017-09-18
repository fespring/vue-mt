<template>
  <div>
  <search></search>
  <loading></loading>
    
  </div>
</template>

<script>
import Search from './Search'
import Loading from './Loading'
export default {
  name: 'home',
  components:{
    Search,
    Loading
  }
}
</script>

<style lang="less">

</style>