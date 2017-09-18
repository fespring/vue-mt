<template>
  <div>
    <search></search>
    <accordion></accordion>
    <grid></grid>
    <infiniteScroll></infiniteScroll>
  </div>
</template>

<script>
import Search from './Search'
import Accordion from './Accordion'
import Grid from './Grid'
import InfiniteScroll from 'InfiniteScroll'



export default {
  name: 'home',
  components:{
    Search,
    Accordion,
    Grid,
    InfiniteScroll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
