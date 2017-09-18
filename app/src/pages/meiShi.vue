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
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          :infinite-scroll-distance="num">
          <li v-for="item in list">{{ item }}</li>
        </ul>
    </div>
</div>
</template>
<script>
    export default {
        name:'meiShi',
         data () {
    const list = []
    for (let i = 0; i < 30; i++) {
      list.push('item' + (i + 1))
    }
    return {
      list,
      num: 30,
      loading:false
    }
  },
  methods: {
     back(){
                this.$router.back();
            },
   loadMore() {
      this.loading = true;
  setTimeout(() => {
    let last = this.list[this.list.length - 1];
    for (let i = 1; i <= 10; i++) {
      this.list.push(last + i);
    }
    this.loading = false;
  }, 1000);
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
