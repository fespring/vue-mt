<template>
<div class="aa">
  <mu-list>
    <template  v-for="item in list">
        <mu-list-item :title="item"/>
        <mu-divider/>
    </template>
  </mu-list>
  <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
</div>
</template>

<script>
export default {
  data () {
    const list = []
    for (let i = 0; i < 20; i++) {
      list.push('item' + (i + 1))
    }
    return {
      list,
      num: 20,
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
        for (let i = this.num; i < this.num + 20; i++) {
          this.list.push('item' + (i + 1))
        }
        this.num += 20
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="css">
.aa{
   margin-bottom: 0.56rem;
}
</style>