
<template>
     <mu-appbar>
        <mu-flat-button label="保定" class="demo-flat-button" labelPosition="before" icon="expand_more" secondary/>
        <mu-text-field icon="search" class="appbar-search-field" hintText="搜索" fullWidth/>
        <mu-flat-button label="扫一扫" slot="right" class="demo-flat-button" icon="crop_free" primary/>
     </mu-appbar>
</template>
<script>
export default {
  name:'tit'
}
</script>

<style lang="less" scoped>
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
