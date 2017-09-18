<template>
<div>
  <mu-flexbox>
    <mu-flexbox-item class="flex-demo">
     <img src="1.png"/>
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
      <img src="2.png"/>
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
      <img src="3.png"/>
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
      <img src="4.png"/>
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
      <img src="5.png"/>
    </mu-flexbox-item>
    
  </mu-flexbox>
  <mu-flexbox class="mt8" orient="vertical">
    <mu-flexbox-item order="0" class="flex-demo">
      9
    </mu-flexbox-item>
    <mu-flexbox-item order="2" class="flex-demo">
      10
    </mu-flexbox-item>
  </mu-flexbox>
  
</div>
</template>
<script>
    export default {
        name:"grid",
    }
</script>
<style>

.flex-demo {
  width:20%;
  height: 0.6rem;
  background-color: #ccc;
  text-align: center;
  line-height:0.6rem;
}
</style>