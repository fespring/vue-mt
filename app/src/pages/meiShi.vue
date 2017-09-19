<template>
<div style="background:red;">
   <mu-appbar class="search">
        <mu-icon-button @click="back" icon="chevron_left" slot="left"/>
        <mu-text-field icon="search" class="appbar-search-field" hintText="输入商家名、品类、或商圈" fullWidth />
         <mu-flat-button color="white" label="地图" slot="right"/>
    </mu-appbar>

    meishi<br/>
    meishi<br/>
    meishi<br/>
    meishi<br/>
    meishi<br/>
    meishi<br/>
    meishi<br/>


     <mu-divider/>
      <div class="demo-refresh-container">  
            <mu-list>
              <template v-for="item in list">
                <mu-list-item :title="item.name"/>
                <mu-divider/>
              </template>
            </mu-list>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
    </div>
</div>
</template>
<script>
 import {getLovers} from '@/api/lover'
    export default {
        name:'meiShi',
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
     back(){
                this.$router.back();
     },
    loadMore () {
        if(this.loading)return false;
        if(this.loaddingAll)return false;
        this.loading = true;

        const params = Object.assign({},{page:++this.page});
        getLovers(params).then((res) => {
            if(res.data.length==0){
              this.loaddingAll=true;
              return false;
            }
            this.loading = false
            this.list = [...this.list,...res.data];
        }).catch((err) => {
          console.log(err);
        });

    }
  }
}
</script>

<style lang="less">
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}

.search {
  position:fixed;
  left:0;
  right:0;
  top:0;
}


.demo-refresh-container{
   position: relative;
    height:100%;

 
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;

  user-select: none;
}

</style>
