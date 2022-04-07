<template>
  <span role='img' class='ykj-h5-ui-icon' :class='className' :title='title' :style='styleObj' @click='handleClick'>
    <svg width='1em' height='1em' fill='currentColor' aria-hidden='true' focusable='false'>
      <use v-bind:xlink:href="getName(name)"></use>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'YkjH5UiIcon',
  props: {
    name: {
      type: String,
      default: '',
      require: true
    },
    className: {
      type: String,
      default: '',
      require: false
    },
    styleObj: {
      type: Object,
      require: false
    },
    title: {
      type: String,
    },
    click: {
      type: Function
    }
  },
  methods: {
    getName(iconName) {
      return `#${iconName}`
    },
    handleClick() {
      this.click && this.click();
    }
  }
}
</script>

<style lang='scss' scoped>
.ykj-h5-ui-icon{
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
</style>
