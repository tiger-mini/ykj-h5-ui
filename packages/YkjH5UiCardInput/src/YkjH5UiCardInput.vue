<template>
  <input
    class='ykj-h5-ui-input'
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
@import '~/index.scss'

</style>
