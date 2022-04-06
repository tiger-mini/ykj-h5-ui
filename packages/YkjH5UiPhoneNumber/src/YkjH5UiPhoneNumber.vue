<template>
  <input
    class='ykj-h5-ui-input'
    v-model='number'
    type='tel'
    ref='mobile'
    maxlength='13'
    @input='onCallInput'
    @keyup='onCallInput'
    @paste='onCallInput'
    placeholder='请输入手机号码'
  />
</template>

<script>
export default {
  name: 'YkjH5UiPhoneNumber',
  props: {
    change: Function
  },
  data() {
    return {
      number: '' //手机号
    }
  },
  methods: {
    // 手机号
    onCallInput: function(event) {
      let value = event.target.value.replace(/\D/g, '').substr(0, 11) // 不允许输入非数字字符，超过11位数字截取前11位
      let len = value.length
      if (len > 3 && len < 8) {
        value = value.replace(/^(\d{3})/g, '$1 ')
      } else if (len >= 8) {
        value = value.replace(/^(\d{3})(\d{4})/g, '$1 $2 ')
      }
      this.number = value
      this.change && this.change(value)
    }
  }
}
</script>
