<template>
  <div class='preview-container'>
    {{ page }} / {{ numPages }}
    <pdf :src='src' :page='page' @num-pages='numPages = $event'></pdf>
    <div class='left-btn' :class='page === 1? "disabled":""' v-show='numPages > 1' @click='ago' title='上一页'></div>
    <div class='right-btn' :class='page === numPages? "disabled":""' v-show='numPages > 1' @click='next' title='下一页'></div>
  </div>
</template>
<script>
import pdf from 'vue-pdf'

export default {
  name: 'YkjH5PreviewPdf',
  components: { pdf },
  data() {
    return {
      page: 1,
      numPages: 0
    }
  },
  props: {
    src: {
      type: String,
      require: true
    }
  },
  methods: {
    ago() {
      if (this.page > 1) {
        this.page --;
      }
    },
    next() {
      if (this.page === this.numPages) {
        return;
      }
      this.page ++;
    }
  }
}
</script>
<style lang='scss' scoped>
.preview-container {
  position: relative;

  .left-btn,.right-btn {
    cursor: pointer;
    position: absolute;
    top:48%;
    height: 50px;
    width: 50px;
    background: url("./assets/left.png") center center no-repeat;
    background-size: contain;
  }
  .left-btn.disabled{
    background: url("./assets/left_disabled.png") center center no-repeat;
    background-size: contain;
  }
  .right-btn {
    right: 20px;
    background: url("./assets/right.png") center center no-repeat;
    background-size: contain;
  }
  .right-btn.disabled {
    background: url("./assets/right_disabled.png") center center no-repeat;
    background-size: contain;
  }
}
</style>
