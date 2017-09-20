<template>
<div>
<template>
<div class="demo-grid">
   <mu-row gutter>
    <mu-col class="borderright" width="33" >
    周三半价
    </mu-col>
       <mu-col class="borderright" width="33">
    免单伙食
    </mu-col>
       <mu-col width="33">
    国庆特价
    </mu-col>
   
  </mu-row>
   <mu-divider/>
  <mu-row gutter>
    <mu-col  class="borderright" width="25">
    十元红包
    </mu-col>
      <mu-col  class="borderright" width="25">
    免费专区
    </mu-col >
      <mu-col  class="borderright" width="25">
    畅想游乐
    </mu-col>
      <mu-col width="25">
    优惠精选
    </mu-col>
   
  </mu-row>



  <div class="oneImg">12</div>



</div>



</template>

</div>
</template>
<script>
export default{
    
}
</script>

<style lang="css" scoped>
.demo-grid div[class*="col-"]{
    height:1.5rem;
}
.demo-grid div.borderright[class*="col-"] {
  background: #fff;
  text-align: center;
  color: #000;
  border-right: 1px solid #ddd;
  padding: 8px;
}

.oneImg{
    height:1.5rem;
    background:red;
}

.oneImg{
   border-top:0.08rem solid #eee;
   border-bottom:0.08rem solid #eee;

}
</style>