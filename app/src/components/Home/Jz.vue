<template>
<div id="Hj">
  <mu-list>
        <template v-for="(item,i) in list">
                <mu-list-item :title="item" :key="i"/>
                <mu-divider :key="i"/>
        </template>
</mu-list>
  <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
</div>
</template>

<script>
export default {
  data () {
    const list = []
    for (let i = 0; i < 10; i++) {
      list.push('item' + (i + 1))
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
          this.list.push('item' + (i + 1))
        }
        this.num += 10
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="css">
    #Hj{
        border-top:10px solid #ddd;
        margin-bottom: 0.56rem;
    }
</style>