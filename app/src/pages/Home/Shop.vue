<template>
<div class="demo-infinite-container">

    <template v-for="item in list">
        <van-card
             
                num="2"
                price=""
               
                >
            <div slot="title">
                 <strong>铁木真烤涮自主城</strong>
                <div style="float:right; width:0.6rem;text-align:right;"><500m</div>
            
            </div>
            <div slot="desc">
                [万博广场]快来呀！！！
                <br/>
                <span style="color:green;font-weight:bold;">￥59</span> <mu-badge content="劲爆" secondary slot="after"/>
          
                 <div style="float:right; width:0.6rem;text-align:right;">已售9127</div>
            </div>
         <div slot="thumb">
           <img :src="'/static/shoplog/'+item+'.png'"/>
        </div>

        </van-card>
    </template>
  <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
</div>
</template>

<script>
import Vue from 'vue';
import { Card } from 'vant';
Vue.component(Card.name, Card);

export default {
  data () {
    const list = []
    for (let i = 0; i < 10; i++) {
      list.push((i + 1))
    }
    return {
      list,
      num: 10,
      loading: false,
      scroller: null
    }
  },
  mounted () {
    this.scroller = this.$el
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
        for (let i = this.num; i < this.num + 10; i++) {
          this.list.push((i + 1))
        }
        this.num += 10
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="css">
.demo-infinite-container{

  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
}
</style>