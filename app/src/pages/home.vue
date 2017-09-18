<template>
  <div>
    <tit></tit>
    <swipe></swipe>
  </div>
    
</template>

<script>
import Tit from './home/Nav'
import Swipe from './home/Swipe'
export default {
  name:'home',
  components:{
      Tit,
      Swipe
  }
}
</script>

