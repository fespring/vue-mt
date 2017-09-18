<template>
  <div>
  <mu-flexbox class="mt8">
      <mu-flexbox-item class="flex-demo">
        <router-link to="/meishi">美食</router-link>
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
        电影／演出
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
        酒店住宿
      </mu-flexbox-item>
       <mu-flexbox-item class="flex-demo">
        休闲娱乐
      </mu-flexbox-item>
       <mu-flexbox-item class="flex-demo">
        外卖
      </mu-flexbox-item>
    </mu-flexbox>

    <mu-flexbox class="mt8">
      <mu-flexbox-item class="flex-demo">
        周边游
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
        机票／火车票
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
        ktv
      </mu-flexbox-item>
       <mu-flexbox-item class="flex-demo">
        丽人／美发
      </mu-flexbox-item>
       <mu-flexbox-item class="flex-demo">
        美团旅行
      </mu-flexbox-item>
    </mu-flexbox>


    <mu-flexbox class="mt8">
      <mu-flexbox-item class="flex-demo">
        景点
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
        结婚／摄影
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
        主题公园
      </mu-flexbox-item>
       <mu-flexbox-item class="flex-demo">
        婚纱摄影
      </mu-flexbox-item>
       <mu-flexbox-item class="flex-demo">
        全部分类
      </mu-flexbox-item>
    </mu-flexbox>
  </div>
</template>
<script>
export default{
  name:'chanel'
}
</script>


<style lang="css">
.mt8 {
  margin-top: 8px;
}
.flex-demo {
  height: 32px;
  background-color: #e0e0e0;
  text-align: center;
  line-height: 32px;
}
</style>



