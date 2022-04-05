<template>
  <input
    class='ykj-h5-ui-card-input'
    v-model='card'
    @input='onInput'
    @keyup='onInput'
    @paste='onInput'
    type='text'
    placeholder='请输入卡号'
  />
</template>

<script>
export default {
  name: 'YkjH5UiCardInput',
  props: {
    change: Function
  },
  data() {
    return {
      card: '' //银行卡
    }
  },
  methods: {
    // 银行卡
    onInput: function() {
      this.card = this.card.replace(/\D/g, '') // 不允许输入非数字字符
      this.card = this.card.replace(/(\d{4})(?=\d)/g, '$1 ') // 4位
      this.change && this.change(this.card)
    }
  }
}
</script>
<style lang='scss' scoped>
.ykj-h5-ui-card-input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 1;
  outline: none;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  width: 100%;
}
</style>
