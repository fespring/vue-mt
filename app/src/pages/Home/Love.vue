<template>
<div>
	 <mu-sub-header>猜你喜欢</mu-sub-header>
	 <mu-divider/>

  
    <mu-list>
      <template v-for="item in list">
        <mu-list-item disableRipple :title="item"/>
        <mu-divider/>
      </template>
    </mu-list>
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>

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
        this.list = list
        this.num += 10
        this.refreshing = false
      }, 2000)
    }
  }
}
</script>


