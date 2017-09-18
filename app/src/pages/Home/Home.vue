<template>
  <div>
    <search></search>
    <accordion></accordion>
    <flex></flex>
    <grid></grid>
    <haxi></haxi>
  </div>
</template>

<script>
import Search from './Search'
import Accordion from './Accordion'
import Flex from './Flex'
import Grid from './Grid'
import Haxi from './Haxi'



export default {
  name: 'home',
  components:{
    Search,
    Accordion,
    Flex,
    Grid,
    Haxi

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
