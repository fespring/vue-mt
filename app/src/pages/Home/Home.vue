<template>
  <div>
      <daohang></daohang>
      <lunbo></lunbo>
      <lanmu></lanmu>
      <ad></ad>
      <shop></shop>

  </div>
</template>

<script>

import Daohang from './Daohang';
import Lunbo from './Lunbo';
import Lanmu from './Lanmu';
import Ad from './Ad';
import Shop from './Shop';


export default {

  components:{
    Daohang,
    Lunbo,
    Lanmu,
    Ad,
    Shop
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
