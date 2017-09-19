<template>
<div>
  <van-swipe auto-play class="lunbo">
    <van-swipe-item v-for="image in images" :style="'background-color:'+image.color">{{image.text}}</van-swipe-item>
</van-swipe>

</div>
</template>
<script>
import Vue from 'vue';
import { Swipe,SwipeItem} from 'vant';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default{
    data(){
        return{
            images:[
                {color:"red",text:"lunbo1"},
                {color:"green",text:"lunbo2"},
                {color:"blue",text:"lunbo3"},
                {color:"pink",text:"lunbo4"},
                {color:"yellow",text:"lunbo5"},
            ]
        }
    }
}
</script>
<style scoped>
    .lunbo{
        height:1.2rem;
    }

</style>
