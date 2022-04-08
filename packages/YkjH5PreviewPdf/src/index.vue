<template>
  <div>
    <pdf
      v-for='i in numPages'
      :key='i'
      :src='loadingTask'
      :page='i'
    ></pdf>
  </div>
</template>
<script>
import pdf from 'vue-pdf'

export default {
  name: 'YkjH5PreviewPdf',
  components: { pdf },
  data() {
    return {
      loadingTask:pdf.createLoadingTask(this.src),
      numPages: 0
    }
  },
  props: {
    src: {
      type: String,
      require: true
    }
  },
  mounted() {
    this.loadingTask.promise.then(pdf => {
      this.numPages = pdf.numPages
    })
  }
}
</script>
<style lang='scss' scoped>
//https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf
</style>
