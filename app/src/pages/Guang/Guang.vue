<template>
  <div>
      <daohang></daohang>
      <div class="middle">
        <van-pull-refresh v-model="isLoading">
  <van-tabs>
  <van-tab title="精选">
  

  <div class="item" v-for="i in 10">
    <div>一碗燕麦粥,让你三天早餐不重样</div>
    <img src="/static/shoplog/1.png" width="100"/>
    <img src="/static/shoplog/2.png" width="100"/>
    <img src="/static/shoplog/3.png" width="100"/>
    <p><span>生活灵感</span>147万查看</p>
  </div>
  
  
  
  </van-tab>
  <van-tab title="关注">内容二</van-tab>
  <van-tab title="享美食">内容三</van-tab>
  <van-tab title="出去浪">内容四</van-tab>
  <van-tab title="约电影">内容五</van-tab>
</van-tabs>
        </van-pull-refresh>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import Daohang from './Daohang';

import { PullRefresh } from 'vant';

import { Tab, Tabs } from 'vant';

Vue.component(Tab.name, Tab);
Vue.component(Tabs.name, Tabs);

Vue.component(PullRefresh.name, PullRefresh);

export default {
    data() {
    return {
      isLoading: false
    }
  },

  watch: {
    isLoading() {
      if (this.isLoading) {
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    }
  },
  components:{
    Daohang
   
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.middle{
  padding-top:.55rem;
  padding-bottom:.56rem;
}
.item{
  border-bottom:1px solid #ccc;
  margin-bottom:0.05rem;
  margin-top:0.05rem;
}
</style>
