<template>
<mu-appbar class="search">
    <mu-flat-button label="保定" class="demo-flat-button" labelPosition="before" icon="expand_more" secondary/>
    <mu-text-field icon="search" class="appbar-search-field" hintText="火锅" fullWidth />
   <mu-icon-button icon="android" slot="right"/>
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

.search {
  position:fixed;
  left:0;
  right:0;
  top:0;
}
</style>