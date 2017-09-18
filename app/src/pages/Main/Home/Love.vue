<template>
    <div>
              <mu-sub-header>猜你喜欢</mu-sub-header>
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
  name:'lover',
   data () {
    const list = []
    for (let i = 0; i < 10; i++) {
      list.push('item' + (i + 1))
    }
    return {
      list,
      num: 10,
      loading:false
    }
  },
  methods: {
   loadMore() {
      this.loading = true;
  setTimeout(() => {
    let last = this.list[this.list.length - 1];
    for (let i = 1; i <= 10; i++) {
      this.list.push(last + i);
    }
    this.loading = false;
  }, 2500);
    }
  }
}
</script>


<style scoped>

.demo-refresh-container{
   position: relative;
    height:calc(100%-112px);

 
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;

  user-select: none;
}
.tip{
  text-align:center;
}
</style>


