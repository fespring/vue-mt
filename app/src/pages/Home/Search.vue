<template>
<mu-appbar title="Title">
  
  <mu-flat-button icon="expand_more" label="北京" class="demo-flat-button" labelPosition="before" iconButton />
  <mu-text-field icon="search" class="appbar-search-field"   hintText="自助" fullWidth/>
  <mu-icon-button icon="crop_free" slot="right"/>

  
</mu-appbar>
</template>
<script>
   export default {
        name:'search'
    }
</script>

<style lang="less">
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}
</style>