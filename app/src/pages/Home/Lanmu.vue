<template>
<div>
     <mu-flexbox :gutter="20">
        <mu-flexbox-item class="flex-demo1">
        <router-link to="/meishi">美食</router-link>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo1">
        电影
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo1">
        酒店
        </mu-flexbox-item>
             <mu-flexbox-item class="flex-demo1">
        休闲
        </mu-flexbox-item>
             <mu-flexbox-item class="flex-demo1">
        外卖
        </mu-flexbox-item>
    </mu-flexbox>
      <mu-divider/>
      
      <mu-flexbox class="mt8">
        <mu-flexbox-item class="flex-demo">
        周边游
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo">
        机票
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo">
        丽人
        </mu-flexbox-item>
             <mu-flexbox-item class="flex-demo">
        KTV
        </mu-flexbox-item>
             <mu-flexbox-item class="flex-demo">
        美团
        </mu-flexbox-item>
    </mu-flexbox>
      <mu-flexbox class="mt8">
        <mu-flexbox-item class="flex-demo">
        景点
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo">
        结婚
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo">
        母婴
        </mu-flexbox-item>
             <mu-flexbox-item class="flex-demo">
        生活
        </mu-flexbox-item>
             <mu-flexbox-item class="flex-demo">
        全部分类
        </mu-flexbox-item>
    </mu-flexbox>

</div>
</template>
<script>
export default{
    
}
</script>
<style scoped>
.mt8 {
  margin-top: 0.08rem;
}
.flex-demo1 {
  height: 1rem;
  line-height: 1rem;

  text-align: center;

}
.flex-demo {
  height: 0.8rem;
  line-height: 0.8rem;

  text-align: center;

}
</style>
