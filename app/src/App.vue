<template>
<<<<<<< HEAD
  <div id="view">
  
     <router-view></router-view>
  </div>
</template>

<script>




export default {
  data () {
    return {
     
      bottomNav: '/home'
    }
  },
  methods: {
    handleChange (val) {
    
       this.bottomNav = val
       this.$router.push(val);
    }
    
  },
  mounted(){
    this.bottomNav=this.$route.path;
  }
  
}
</script>

<style>
html,body{
  height:100%;
}
#view{
  width:100%;
  height:100%;
  position:relative;
}

</style>
=======
  <div>
    <router-view></router-view>
  </div>
</template>
>>>>>>> teach
