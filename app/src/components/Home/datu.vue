<template>
<div>
  <mu-flexbox>
    <mu-flexbox-item class="flex-demo a" >
      1
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo a ab">
      2
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo a">
      3
    </mu-flexbox-item>

  </mu-flexbox>

  <mu-flexbox>
    <mu-flexbox-item class="flex-demo b">
      1
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo b">
      2
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo b">
      3
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo b">
      4
    </mu-flexbox-item>

  </mu-flexbox>
    <div class="chai"><p>- 猜你喜欢 -</p></div>
  <div</div>
</div>
</template>

<script>
    export default{
        name:"datu",
    }

</script>
<style lang="css">
.flex-demo {
    background-color: #e0e0e0;
    text-align: center;
}
.a{
    height: 1rem;
}
.ab{
    border-left: 1px solid #000;
    border-right: 1px solid #000;
}
.b{
    height: 0.7rem;
}
.chai{
border-top:0.1rem solid #ccc;
height:0.5rem;
background: red;
}
p{
    text-align: center;
}

</style>