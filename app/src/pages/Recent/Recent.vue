<template>
  <div class="hello">
       <daohang></daohang>

      <div class="app">
         <Tabs @changePage="changePage" :indexTab="indexTab">
            <Tab label="享美食" hash="0" fontsize="36" tabheight="90" color="red">
                    <item1></item1>
            </Tab>
            <Tab label="住酒店" hash="1" fontsize="36" tabheight="90" color="red">
                <div class="jiudian"></div>
            </Tab>
            <Tab label="爱玩乐" hash="2" fontsize="36" tabheight="90" color="red">
                <div class="wanle"></div>
            </Tab>
             <Tab label="全部" hash="3" fontsize="36" tabheight="90" color="red">
                 <div class="all"></div>
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
    data(){
        return {
            indexTab:"0"
        }
    },
 components:{
    Daohang,Tabs,Tab,Item1
  },
  methods: {
      changePage(idx) {
         this.indexTab=idx.toString();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
   .jiudian,.wanle,.all{
       height:5.6rem;
   }
   .jiudian{
       background:red;
   }
   .wanle{
       background:blue;
   }
   .all{
       background:green;
   }
</style>
