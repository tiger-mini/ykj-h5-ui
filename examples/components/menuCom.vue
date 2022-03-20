<template>
  <div class='ant-col main-menu ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-6 ant-col-xl-5 ant-col-xxl-4'>
    <div>
      <div class=''>
        <section class='main-menu-inner'>
          <ul class='ant-menu ant-menu-root ant-menu-inline ant-menu-light aside-container menu-site'>

            <li
              class='ant-menu-item ant-menu-item-only-child'
              :class='currentPath === "/preface" ? "ant-menu-item-selected": ""'
              style='padding-left: 30px;'
            >
              <span class='ant-menu-title-content'>
                <router-link active-class="active" to="/preface">组件总览</router-link>
              </span>
            </li>

              <li class='ant-menu-item-group' v-for="(group, key) in data.groups" :key='key'>
                <div class='ant-menu-item-group-title' :title='group.groupName'>{{group.groupName}}</div>
                <ul class='ant-menu-item-group-list'>
                  <li
                    class='ant-menu-item'
                    :class='currentPath === item.path ? "ant-menu-item-selected": ""'
                    style='padding-left: 30px;'
                    v-for="item in group.list"
                    :key='item.path'
                  >
                    <span class='ant-menu-title-content'>
                      <router-link active-class="active" :to="item.path" exact v-text="item.title"></router-link>
                  </span>
                  </li>

                </ul>
              </li>

          </ul>
          <div aria-hidden='true' style='display: none;'></div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  watch:{
    '$route.path':function(newVal){
      this.currentPath = newVal;
    }
  },
  data() {
    return {
      currentPath: '',
      highlights: [],
      navState: [],
      isSmallScreen: false,
      isFade: false
    }
  }
}
</script>

<style lang='scss'>

</style>
