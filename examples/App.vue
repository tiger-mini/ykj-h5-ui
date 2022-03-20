<template>
  <div id='app'>
    <!-- header -->
    <div class='header'>
      <div class='logo'>
        <Logo />
      </div>
<!--      <button class='toGithub' @click='toGithub'>View on GitHub</button>-->
    </div>
    <div class='main'>
      <!-- sidebar -->
      <div class='sidebar'>
        <nav-side :data='navsData'></nav-side>
      </div>
      <div class='view page-container'>
<!--        <ykj-h5-ui-card-input class='xxxxx' @change='handleCardChange' />-->
<!--        <ykj-h5-ui-icon name='iconicn_m_item' :style="{'font-size': '88px'}"></ykj-h5-ui-icon>-->
        <router-view></router-view>
      </div>
    </div>
    <!-- footer -->
    <!-- <div class="footer"></div> -->
  </div>
</template>
<script>
import Logo from './components/Logo'
import navSide from './components/menuCom'
import navsData from './router/routerCon.json'
// import YkjH5UiIcon from '../packages/YkjH5UiIcon/src/YkjH5UiIcon'
// import YkjH5UiCardInput from '../packages/YkjH5UiCardInput/src/YkjH5UiCardInput'

export default {
  components: {
    Logo,
    navSide,
    // YkjH5UiIcon,
    // YkjH5UiCardInput
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
