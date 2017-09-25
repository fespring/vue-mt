<template>
  <div>
     meishi
     <button @click="back">返回</button>
  </div>


</template>
<script>
export default{
  methods:{
    back(){
      this.$router.back();
    }
  }
}
</script>


