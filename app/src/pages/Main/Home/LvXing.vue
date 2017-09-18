<template>
<div class="demo-grid">
  <mu-row gutter>
    <mu-col width="40" >
      抢30元红包门票
    </mu-col>
    <mu-col width="60" >
      <mu-row>
        <mu-col width="50">酒店</mu-col>
        <mu-col width="50">订票</mu-col>
      </mu-row>
      <mu-row>
        <mu-col width="50" >出境</mu-col>
        <mu-col width="50" >秒杀</mu-col>
      </mu-row>

    </mu-col>
  </mu-row>
 
</div>
</template>
<script>
export default{
  name:"lvXing"
}
</script>

<style lang="css">
.demo-grid{
  margin-top:8px;
}
.demo-grid div[class*="col-"] {
  background: #fff;
  text-align: center;
  color: #000;
  border: 1px solid #ddd;
  padding: 8px;
  margin-bottom: 8px;
}
</style>