<template>
  <ykj-h5-ui-icon
    name="iconicn_photo"
    class-name="copy"
    title="点击复制"
    :click="handleCopy"
  />
</template>
<script>
import YkjH5UiIcon from '../../ykj-h5-ui-icon/src/YkjH5UiIcon'

export default {
  name: 'YkjH5ClipBoard',
  components: { YkjH5UiIcon },
  data() {
    return {
      timer: null
    }
  },
  props: {
    success: {
      type: Function
    },
    content: {
      type: String,
      require: true
    }
  },
  methods: {
    handleCopy() {
      if (this.timer) {
        return
      }
      this.timer = setTimeout(() => {
        let oInput = document.createElement('input')
        oInput.id = `ykj_h5_clip_board_input_${Math.random()}`
        oInput.value = this.content || ''
        document.body.appendChild(oInput)
        oInput.select() // 选择对象;
        document.execCommand('Copy') // 执行浏览器复制命令
        oInput.remove()
        clearTimeout(this.timer)

        this.success && this.success()
      }, 1500)
    }
  }
}
</script>
<style lang="scss" scoped>
.copy {
  cursor: pointer;
}
</style>
