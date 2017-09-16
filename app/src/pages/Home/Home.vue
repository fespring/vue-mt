<template>
  <div>
    <search></search>
    <accordion></accordion>
  </div>
</template>

<script>
import Search from './Search'
import Accordion from './Accordion'

export default {
  name: 'home',
  components:{
    Search,
    Accordion
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
