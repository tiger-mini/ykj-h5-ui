<template>
  <div class='ykj-h5-cell' :class="bordered?'bordered':''">
    <div class='title'>{{title}}</div>
    <div class='content'>{{content}}<ykj-h5-ui-icon v-if='isLink' name='iconicn_xs_more' /></div>
  </div>
</template>
<script>
import YkjH5UiIcon from '../../YkjH5UiIcon/src/YkjH5UiIcon'

export default {
  name: "YkjH5Cell",
  components: {YkjH5UiIcon},
  props: {
    title: {
      type:String,
      require: true
    },
    content: {
      type:String,
      require: true
    },
    bordered: {
      type: Boolean
    },
    isLink: {
      type: Boolean
    }
  }
}
</script>
<style lang='scss' scoped>
.ykj-h5-cell {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 8px;
  min-height: 34px;
  align-items: center;

  .title {
    flex: 1;
    color: #969799;
  }
  .content{
    flex: 11;
    text-align: end;
    color: #323233;
  }
}
.ykj-h5-cell.bordered{
  border: 1px solid #ebebeb;
  border-radius: 2px;
}
</style>
