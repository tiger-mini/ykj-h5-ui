import YkjH5UiIcon from './YkjH5UiIcon/src/YkjH5UiIcon'
import YkjH5UiCardInput from './YkjH5UiCardInput/src/YkjH5UiCardInput'
import YkjH5UiPhoneNumber from './YkjH5UiPhoneNumber'
import YkjH5Cell from './YkjH5Cell/index'
import YkjH5ClipBoard from './YkjH5ClipBoard'
import YkjH5PreviewPdf from './YkjH5PreviewPdf'

import './index.scss'

// 所有组件列表
const components = [
  YkjH5UiIcon,
  YkjH5UiCardInput,
  YkjH5UiPhoneNumber,
  YkjH5Cell,
  YkjH5ClipBoard,
  YkjH5PreviewPdf
]
// 定义install方法，接收Vue作为参数
const install = function(Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  components.map(component => Vue.component(component.name, component))
  // 下面这个写法也可以
  // components.map(component => Vue.use(component))
}

// 检测到Vue才执行，毕竟我们是基于Vue的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 所有组件，必须具有install，才能使用Vue.use()
  ...components
}
