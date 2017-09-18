<template>
 
   
            <div class="demo-infinite-container">
               <mu-sub-header>猜你喜欢</mu-sub-header>
              <mu-divider/>
            <mu-list>
              <template v-for="item in list">
                <mu-list-item :title="item.name"/>
                <mu-divider/>
              </template>
            </mu-list>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
          </div>
    
</template>


<script>
 import {getLovers} from '@/api/lover'

export default {
  data () {
    return {
      list:[],
      page: 0,
      loading: false,
      scroller: null
    }
  },
  mounted () {
    this.scroller = this.$el
    this.loadMore();
  },
  methods: {
    loadMore () {
      this.loading = true;

      const params = Object.assign({},{page:++this.page});
     	getLovers(params).then((res) => {
          this.loading = false
          this.list = res.data;
      }).catch((err) => {
        console.log(err);
      });

    }
  }
}
</script>


<style scoped>
.demo-infinite-container{
  width: 100%;
  height:500px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
}
</style>


