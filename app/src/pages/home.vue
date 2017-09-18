<template>
  <div>
    <tit></tit>
    <swipe></swipe>
    <like></like>
  </div>
    
</template>

<script>
import Tit from './home/Nav'
import Swipe from './home/Swipe'
import Like from './home/Like'
export default {
  name:'home',
  components:{
      Tit,
      Swipe,
      Like
  }
}
</script>

