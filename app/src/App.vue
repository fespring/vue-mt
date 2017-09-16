<template>
  <div id="app">
    <mu-appbar title="Title">
     
    </mu-appbar>
    <router-view></router-view>
  </div>
</template>

<script>

import Vue from 'vue'
import 'muse-components/styles/base.less' // 加载基础的样式



export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
