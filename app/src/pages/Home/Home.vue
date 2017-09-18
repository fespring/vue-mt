<template>
  <div>
    <search></search>
    <carousel></carousel>
    <category></category>
    <areas></areas>
    <div class="chai"><p>- 猜你喜欢 -</p></div>
    <loading></loading>
    <mu-back-top/>
  </div>
</template>

<script>
import Search from './Search'
import Carousel from './Carousel'
import Category from './Category'
import Areas from './Areas'
import Loading from './Loading'
export default {
  name: 'home',
  components:{
    Search,
    Carousel,
    Category,
    Areas,
    Loading
  }
}
</script>

<style lang="less">
  .chai{
    border-top:0.1rem solid #ccc;
    height:0.5rem;
    background: red;
   
    p{
      text-align: center;
    }
  }
</style>