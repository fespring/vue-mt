<template>
    <div>
              <mu-sub-header>猜你喜欢</mu-sub-header>
              <mu-divider/>
              <div class="demo-refresh-container">  
                  
                  <mu-list>
                    <template v-for="item in list">
                      <mu-list-item disableRipple :title="item"/>
                  
                    </template>
                  
                  </mu-list>
                  <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
                    <div class="tip" v-show="!refreshing">下拉加载更多请</div>
                    <br/>
                    <br/>
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
      refreshing: false,
      trigger: null
    }
  },
  mounted () {
    this.trigger = this.$el
  },
  methods: {
    refresh () {
      console.log(Math.random());
      this.refreshing = true
      setTimeout(() => {
        const list = []
        for (let i = this.num; i < this.num + 10; i++) {
          list.push('item' + (i + 1))
        }
        this.list = [...this.list,...list];
        this.num += 10
        this.refreshing = false
      }, 2000)
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


