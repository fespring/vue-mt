<template>
<div>
    <div class="tabbox">
    <van-row>
    <van-col class="fc" span="6"><van-tag plain :type="id==1?'danger':''"><span @click="select(1)">热门</span></van-tag></van-col>
    <van-col class="fc" span="6"><van-tag plain :type="id==2?'danger':''"><span @click="select(2)">小吃快餐</span></van-tag></van-col>
    <van-col class="fc" span="6"><van-tag plain :type="id==3?'danger':''"><span @click="select(3)">面包甜点</span></van-tag></van-col>
    <van-col class="fc" span="6"><van-tag plain :type="id==4?'danger':''"><span @click="select(4)">川菜</span></van-tag></van-col>
    </van-row> 

    <van-row>
    <van-col class="fc" span="6"><van-tag plain  :type="id==5?'danger':''"><span @click="select(5)">北京菜</span></van-tag></van-col>
    <van-col class="fc" span="6"><van-tag plain  :type="id==6?'danger':''"><span @click="select(6)">东北菜</span></van-tag></van-col>
    <van-col class="fc" span="6"><van-tag plain  :type="id==7?'danger':''"><span @click="select(7)">韩国料理</span></van-tag></van-col>
    <van-col class="fc" span="6"><van-tag plain  :type="id==8?'danger':''"><span @click="select(8)">日本料理</span></van-tag></van-col>
    </van-row>
    </div>
     <meishi type="hot"></meishi>
</div>
</template>

<script>

import Vue from 'vue';
import { Tag } from 'vant';

import { Row, Col } from 'vant';

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

Vue.component(Tag.name, Tag);


import Meishi from './Meishi';


export default {
  data(){
    return {
      id:1
    };
  },
  methods: {
    handleClose () {
      window.alert('你点击了删除按钮')
    },
    select(id){
      this.id=id;



    }

  },
  components:{
    Meishi
  }
}
</script>

<style lang="scss">



@mixin flex-center() {

    display:flex;
    justify-content:center;
    align-items:center;

}



.fc{
   
    height:.3rem;
    @include flex-center();

    span{
      width:80%;
      height:90%;
  
      @include flex-center();
    }
}
.tabbox{
    background:#eee;
    border-bottom:1px solid #ccc;
}
</style>