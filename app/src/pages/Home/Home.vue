<template>
  <div>
    <search></search>
    <accordion></accordion>
    <chanel></chanel>
    <lv-xing></lv-xing>
    <wai-mai></wai-mai>
    <love></love>

  </div>
</template>

<script>
import Search from './Search'
import Accordion from './Accordion'
import Chanel from './Chanel'
import lvXing from './lvXing'
import waiMai from './waiMai'
import Love from './Love'

export default {
  name: 'home',
  components:{
    Search,
    Accordion,
    Chanel,
    lvXing,
    waiMai,
    Love
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
