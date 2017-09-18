<template>
    <mt-swipe :auto="4000" class="accordion">
        <mt-swipe-item style="background:red;">1</mt-swipe-item>
        <mt-swipe-item style="background:green;">2</mt-swipe-item>
        <mt-swipe-item style="background:blue;">3</mt-swipe-item>
    </mt-swipe>
</template>

<script>




    export default {
        name:"accordion"
    }



</script>

<style>
    .accordion{
        height:1.2rem;
    }
</style>