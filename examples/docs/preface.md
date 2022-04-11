### 写在前面

该组件库主要是用来放一些云空间移动端的通用业务组件。

<br/>
<br/>
<br/>

### 引入多个UI库
```javascript
// babel.config.js
module.exports = {
  "plugins": [
      ['import', { libraryName: "vant", libraryDirectory: "es", style: true }, 'vant'],
      ['import', {
          libraryName: 'ykj-h5-ui',
          libraryDirectory: 'lib',
          style: (name) => {
              const cssName = name.split('/')[2]
              return `ykj-h5-ui/lib/style/${cssName}.css`
          },
          camel2DashComponentName: false,
          camel2UnderlineComponentName: false
      }, 'ykj-h5-ui']
  ],
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
```
