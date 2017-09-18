<template>
    <div>
        <div class="meituan">
            <mu-flexbox>
                <mu-flexbox-item class="flex-demo">
                美食
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                电影/演出
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
        </div>
        <div class="fenlei">
            <mu-flexbox>
                <mu-flexbox-item class="flex-demo">
                周边游
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                机票/火车票
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                KTV
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                丽人/美发
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                美团旅行
                </mu-flexbox-item>
            </mu-flexbox>
            <mu-flexbox class="mar">
                <mu-flexbox-item class="flex-demo">
                景点
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                婚纱摄影
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                足疗按摩
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                鲜花
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                全部分类
                </mu-flexbox-item>
            </mu-flexbox>
        </div>
        <div class="tuijian">
            <mu-flexbox gutter="2">
                <mu-flexbox-item class="demo">
                限时抢购
                </mu-flexbox-item>
                <mu-flexbox-item class="demo">
                周一特价
                </mu-flexbox-item>
                <mu-flexbox-item class="demo">
                免费拍
                </mu-flexbox-item>
            </mu-flexbox>
            <mu-flexbox gutter="2">
                <mu-flexbox-item class="demo">
                特惠观影
                </mu-flexbox-item>
                <mu-flexbox-item class="demo">
                免费专区
                </mu-flexbox-item>
                <mu-flexbox-item class="demo">
                夏季旅拍
                </mu-flexbox-item>
                <mu-flexbox-item class="demo">
                优惠精选
                </mu-flexbox-item>
            </mu-flexbox>
        </div>
        <div class="guss">
            猜你喜欢
        </div>
        <div class="scroll">
            <div class="demo-infinite-container">
            <mu-list v-for="(item,i) in list" :key="i">
              
                <mu-list-item :title="item"/>
                <mu-divider/>
                
            </mu-list>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name:'like',
  data(){
    const list = []
    for (let i = 0; i < 10; i++) {
        list.push('item' + (i + 1))
    }
    return {
        list,
        num: 10,
        loading: false,
        scroller: null
    }
  },
  mounted(){
      this.scroller=this.$el
  },
  methods:{
      loadMore () {
      this.loading = true
      setTimeout(() => {
        for (let i = this.num; i < this.num + 10; i++) {
          this.list.push('item' + (i + 1))
        }
        this.num += 10
        this.loading = false
      }, 2000)
    }
  }
}
</script>


<style lang="css">

.flex-demo {
  height: 0.5rem;
  background-color: #e0e0e0;
  text-align: center;
  line-height: 0.5rem;
}
.meituan{
    padding-left: 0.05rem;
    padding-right: 0.05rem;
    height: 0.7rem;
    padding-top: 0.1rem;
    border-bottom: 0.01rem solid #3300ff;
}
.fenlei{
    margin-top: 0.1rem; 
    padding-bottom: 0.1rem;
    border-bottom: 0.01rem solid #3300ff;
}
.mar{
    margin-top: 0.1rem;
}
.tuijian{
    margin-top: 0.1rem;
}
.demo{
    height: 1rem;
    background-color: #e0e0e0;
    text-align: center;
    line-height: 1rem;
    border-top:0.02rem solid #f0f0f0;
}
.guss{
    margin-top: 0.1rem;
    background: #e0e0e0;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    font-size: 0.2rem;
}
</style>

