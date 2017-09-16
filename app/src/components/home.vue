<template>
<div class="gridlist-demo-container">
  <mu-grid-list class="gridlist-demo">
    <mu-sub-header>图片展示</mu-sub-header>
    <mu-grid-tile v-for="tile, index in list" :key="index">
      <img :src="tile.image"/>
      <span slot="title">{{tile.title}}</span>
      <span slot="subTitle">by <b>{{tile.author}}</b></span>
      <mu-icon-button icon="star_border" slot="action"/>
    </mu-grid-tile>
  </mu-grid-list>
</div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        image: '../components/assets/logo.png',
        title: 'Breakfast',
        author: 'Myron'
      }, {
        image: '../assets/logo.png',
        title: 'Burger',
        author: 'Linyu'
      }, {
        image: '../assets/logo.png',
        title: 'Camera',
        author: 'ruolin'
      }, {
        image: '../assets/logo.png',
        title: 'Hats',
        author: 'kakali'
      }, {
        image: '../assets/logo.png',
        title: 'Honey',
        author: 'yuyang'
      }, {
        image: '../assets/logo.png',
        title: 'Morning',
        author: 'mokayi'
      }, {
        image: '../assets/logo.png',
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        image: '../assets/logo.png',
        title: 'water',
        author: 'TDDyyyyyyy'
      }]
    }
  }
}
</script>

<style>
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gridlist-demo{
  width: 500px;
  height: 450px;
  overflow-y: auto;
}
</style>