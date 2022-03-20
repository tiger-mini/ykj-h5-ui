<template>
  <div id='app'>
    <logo/>
    <div class='main-wrapper'>
      <div class="ant-row" style="row-gap: 0px;">
        <nav-side :data='navsData'></nav-side>
        <div class='ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-18 ant-col-xl-19 ant-col-xxl-20'>
          <section class='main-container'>
            <section class='class="markdown"'>
              <router-view></router-view>
            </section>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from './components/Logo'
import navSide from './components/menuCom'
import navsData from './router/routerCon.json'

export default {
  components: {
    Logo,
    navSide
  },
  data() {
    return {
      navsData
    }
  },
  methods: {
    toGithub() {
      window.location.href = '#'
    },
    handleCardChange(value) {
      console.log('value', value);
    },
  }
}
</script>
<style lang='scss'>
html,
body {
  margin: 0;
  height: 100%;
  background-color: #fff;
}

.header {
  top: 0;
  height: 60px;
  background-color: #fff;

  .logo {
    float: left;
  }

  .toGithub {
    vertical-align: middle;
    width: 120px;
    height: 40px;
    line-height: 40px;
    float: right;
    margin: 10px 28px 0 0;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0 0 8px rgb(156, 147, 147);
    border: none;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    background-color: #fc297f;
    // color: #fff;

    &:hover {
      box-shadow: 0 0 8px #fff;
    }
  }
}

.footer {
  position: absolute;
  height: 60px;
  background-color: antiquewhite;
  width: 100%;
}

.footer {
  bottom: 0;
}

.main {
  background-color: #fff;
  color: #17171d;
  position: absolute;
  bottom: 0;
  top: 60px;
  // padding: 0 0 20px 0;
  width: 100%;
  overflow: hidden;
}

.sidebar,
.view {
  overflow: auto;
}

.sidebar {
  float: left;
  height: 100%;
  width: 200px;
  padding: 10px 0 10px 0;
  border-right: #d3dce6 3px solid;
}

.view {
  padding: 0 0 80px 0;
  float: left;
  height: calc(100% - 50px);
  width: calc(100% - 203px);
  overflow: auto;
}
</style>
<style lang='scss' scoped>
</style>
