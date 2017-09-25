<template>
  <div class="hello">
       <daohang></daohang>

      <div class="app">
         <Tabs indexTab="friend">
            <Tab label="享美食" hash="friend" fontsize="36" tabheight="90" color="red">
                    <item1></item1>
            </Tab>
            <Tab label="住酒店" hash="convince" fontsize="36" tabheight="90" color="red">
           
            </Tab>
            <Tab label="爱玩乐" hash="country" fontsize="36" tabheight="90" color="red">
               
            </Tab>
             <Tab label="全部" hash="all" fontsize="36" tabheight="90" color="red">
             
            </Tab>
        </Tabs>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import Daohang from './Daohang';
import Item1 from './Item1';


import Tabs  from '@/lib/Tab/index.vue';
import Tab  from '@/lib/Tab/tab.vue';



export default {
 components:{
    Daohang,Tabs,Tab,Item1
  },
  methods: {
      changePage(idx) {
          console.log(idx);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
   
</style>
