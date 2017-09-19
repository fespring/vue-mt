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
      loaddingAll:false,
      scroller: null
    }
  },
  mounted () {
    this.scroller = this.$el
    this.loadMore();
  },
  methods: {
    loadMore () {
      if(this.loading)return false;
      if(this.loaddingAll)return false;
      this.loading = true;

      const params = Object.assign({},{page:++this.page});
      var that=this;
      setTimeout(function(){
        	getLovers(params).then((res) => {
              if(res.data.length==0){
                that.loaddingAll=true;
                return false;
              }
              that.loading = false
              that.list = [...that.list,...res.data];
          }).catch((err) => {
            console.log(err);
          });

      },2000);
     

    }
  }
}
</script>


<style scoped>

</style>


