<template>
    <mt-swipe :auto="3000" class="gao">
        <mt-swipe-item><img src="../../assets/1.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/2.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/3.jpg"/></mt-swipe-item>
    </mt-swipe>
</template>

<script>
   export default {
        name:'carousel'
    }
</script>
<style>
    .gao{
        height:1rem;
        margin-top: 0.56rem;
    }
    img{
        height:1.2rem;
        width:100%;
    }
</style>