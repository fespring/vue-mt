<template>
<div class="demo-grid">
  <mu-row gutter>
    <mu-col width="33" tablet="33" desktop="33">col-100<br/>tablet-50<br/>desktop-33</mu-col>
    <mu-col width="33" tablet="33" desktop="33">col-100<br/>tablet-50<br/>desktop-33</mu-col>
    <mu-col width="33" tablet="33" desktop="33">col-100<br/>tablet-50<br/>desktop-33</mu-col>
  </mu-row>
  <mu-row gutter>
    <mu-col width="25" tablet="25" desktop="25">col-50<br/>tablet-30<br/>desktop-25</mu-col>
    <mu-col width="25" tablet="25" desktop="25">col-50<br/>tablet-30<br/>desktop-25</mu-col>
    <mu-col width="25" tablet="25" desktop="25">col-50<br/>tablet-30<br/>desktop-25</mu-col>
    <mu-col width="25" tablet="25" desktop="25">col-50<br/>tablet-30<br/>desktop-25</mu-col>
  </mu-row>
  
</div>
</template>
<script>
    export default {
        name:"grid",
    }
</script>
<style lang="css">
.demo-grid div[class*="col-"] {
  background: #fff;
  text-align: center;
  color: #000;
  border: 1px solid #ddd;
  padding: 8px;
  margin-bottom: 8px;
}
</style>