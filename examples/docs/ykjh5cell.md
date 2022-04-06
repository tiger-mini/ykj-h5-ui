## Cell 单元格

单元格为列表中的单个展示项。
<br/>
<br/>
<br/>

### 基础

只给title和name值

:::demo
```html
<ykj-h5-cell title="单元格" content="内容" />
```
:::

### 进阶
:::demo
```html
<ykj-h5-cell title="单元格" content="内容" bordered />
```
:::

## API

### Cell props

| 参数  | 说明 | 类型 | 默认 |
| ------------- | ------------- | ---- | ---- |
| title  | 左侧标题 |  string    | - |
| content  | 右侧内容 |  string    | - |
| is-link  | 是否展示右侧箭头并开启点击反馈 |  boolean    | false |

