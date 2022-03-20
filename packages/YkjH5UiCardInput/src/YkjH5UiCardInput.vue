<template>
  <input class="" v-model="card" @input="onInput" @keyup="onInput" @paste="onInput"  type="text"  />
</template>

<script>
export default {
  name: "YkjH5UiCardInput",
  props: {
    change: Function
  },
  data() {
    return {
      card:'', //银行卡
      tall: '' //手机号
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
      this.tall = value
    },
    // 银行卡
    onInput: function() {
      // this.card = event.detail.value
      this.card = this.card.replace(/\D/g, '') // 不允许输入非数字字符
      this.card = this.card.replace(/(\d{4})(?=\d)/g, '$1 ') // 4位
      this.change && this.change(this.card);
    }
  }
}
</script>
