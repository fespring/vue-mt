<template>
    <mt-swipe :auto="4000" id="gao">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
</template>

<script>
    export default{
        name:"lb"
    }
</script>
<style>
    #gao{
        height: 1rem;
        background: palegoldenrod;
        font-size: 0.4rem;
        text-align: center;
    }
</style>

