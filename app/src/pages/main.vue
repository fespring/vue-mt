<template>
  <div>
      <router-view></router-view>
      <mu-paper>
      <mu-bottom-nav :value="bottomNav" @change="handleChange" id="footer">
        <mu-bottom-nav-item value="/home" title="首页" icon="home"/>
        <mu-bottom-nav-item value="/nearby" title="附近" icon="pin_drop"/>
        <mu-bottom-nav-item value="/goshopping" title="逛一逛" icon="language"/>
        <mu-bottom-nav-item value="order" title="订单" icon="receipt"/>
        <mu-bottom-nav-item value="mine" title="我的" icon="person"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>
<script>
export default {
    name:'zhuyao',
    data(){
        return{
            bottomNav:'recents'
        }
    },
    mounted(){
        let path=this.$route.path;
        if(path=='/'){
            path='/home'
        }
        this.bottomNav=path
    },
    methods:{
        handleChange(val){
            this.bottomNav=val,
            this.$router.push(val)
        }
    }
}
</script>
<style scoped>
    #footer{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        border-top: 0.02rem solid #f0f0f0;
    }
    .mu-buttom-item{
        min-width: 0.6rem;
    }
</style>

