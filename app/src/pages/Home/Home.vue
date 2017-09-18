<template>
  <div class="home">
    <search></search>
    <div class="middle">
      
              <accordion></accordion>
              <chanel></chanel>
              <lv-xing></lv-xing>
              <wai-mai></wai-mai>
              <love></love>
    </div>
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
  },
   data () {
    const list = []
    for (let i = 0; i < 10; i++) {
      list.push('item' + (i + 1))
    }
    return {
      list,
      num: 10,
      refreshing: false,
      trigger: null
    }
  },
  mounted () {
    this.trigger = this.$el
  },
  methods: {
    refresh () {
      console.log(Math.random());
      this.refreshing = true
      setTimeout(() => {
        const list = []
        for (let i = this.num; i < this.num + 10; i++) {
          list.push('item' + (i + 1))
        }
        this.list = [...this.list,...list];
        this.num += 10
        this.refreshing = false
      }, 50)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  position:absolute;
  top:0px;
  bottom:56px;
  width:100%;

}
.middle{
   position: absolute;
   top:60px;
   bottom:5px;
   width:100%;
   overflow:scroll;
 
}

</style>
