<template>
    <div>
        <router-view class="rv"></router-view>
    <!--    <mu-paper id="footer">
            <mu-bottom-nav :value="bottomNav" @change="handleChange">
                <mu-bottom-nav-item value="/home" title="首页" icon="home"/>
                <mu-bottom-nav-item value="/recent" title="附近" icon="pin_drop"/>
                <mu-bottom-nav-item value="/guang" title="逛一逛" icon="language"/>
                <mu-bottom-nav-item value="/order" title="订单" icon="assignment"/>
                <mu-bottom-nav-item value="/me" title="我的" icon="account_circle"/>
            </mu-bottom-nav>
        </mu-paper>-->

        <mt-tabbar v-model="selected">
          <mt-tab-item id="home">
       
            tab1
          </mt-tab-item>
          <mt-tab-item id="recent">
           
            tab2
          </mt-tab-item>
          <mt-tab-item id="guang">
           
            tab3
          </mt-tab-item>
          <mt-tab-item id="order">
           
            tab4
          </mt-tab-item>
            <mt-tab-item id="me">
           
            tab4
          </mt-tab-item>
      </mt-tabbar>
    </div>
</template>
<script>




export default {
  data () {
    return {
     selected:"tab2",
      bottomNav: '/home'
    }
  },
  methods: {
    handleChange (val) {
    
       this.bottomNav = val
       this.$router.push(val);
    }
    
  },
  watch:{
    selected:function(value){
      var path="/"+value;
       this.$router.push(path);
    }
  },
  mounted(){
    this.bottomNav=this.$route.path;
  }
  
}
</script>

<style scope>


#footer {
  position:absolute;
  left:0;
  right:0;
  bottom:0;
}
.rv{
  min-height:100vh;
}

</style>
