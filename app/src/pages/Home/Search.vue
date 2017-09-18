<template>
<mu-appbar id="yanse">
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
  heigth:10px;
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #8E8E8E;
  }
  .mu-text-field-hint {
    color: fade(#8E8E8E, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}
#yanse{
  background:	#FCFCFC;
  color:#8E8E8E;
  position:fixed;
  left:0;
  top:0;
  right:0;
}
</style>