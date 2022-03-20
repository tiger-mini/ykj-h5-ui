import Vue from 'vue'
import App from './App.vue'
import router from './router'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

// 引入组件
import YkjH5Ui from '../packages'
import DemoBlock from './components/DemoBlock.vue'

Vue.config.productionTip = false
import './assets/common.scss' // 公共样式
import './assets/antd.css';

Vue.use(YkjH5Ui)
Vue.component('DemoBlock', DemoBlock)

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
