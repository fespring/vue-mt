<template>
  <div>
    <mt-swipe :auto="4000" class="swipe">
        <mt-swipe-item style="background:red">1</mt-swipe-item>
        <mt-swipe-item style="background:blue">2</mt-swipe-item>
        <mt-swipe-item style="background:green">3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
    export default {
    name:'swipe'
    }
</script>
<style>
    .swipe{
        height: 1.2rem
    }
</style>

