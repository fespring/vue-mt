<template>
    <mu-appbar id="ys">
        <mu-flat-button label="保定" class="demo-flat-button" labelPosition="before" icon="expand_more" secondary/>
        <mu-text-field icon="search" class="appbar-search-field" hintText="请输入搜索内容" fullWidth/>
        <mu-flat-button color="block" icon="crop_free" slot="right"/>
    </mu-appbar>
</template>

<script>
    export default{
        name:"dh"
    }
</script>

<style lang="less">
    .demo-flat-button{
        color:#000;
    }
    #ys{
        background-color: #fff;
        color: #000;
    }
</style>       