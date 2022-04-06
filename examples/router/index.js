// export default router
import Vue from 'vue'
import Router from 'vue-router'

import navConfig from './routerCon'

Vue.use(Router)
const docsRoutefun = navConfig => {
  const route = [{
    path: "/preface",
    name: "组件总览",
    component: r => require.ensure([], () => r(require(`@/docs/preface.md`)))
  }];
  navConfig.groups.forEach(group => {
    group.list.forEach(nav => {
      route.push({
        path: nav.path,
        name: nav.name,
        component: r =>
          require.ensure([], () => r(require(`@/docs${nav.path}.md`)))
      })
    })
  })

  return route
}
const docsRoute = docsRoutefun(navConfig)
const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{ path: '/', redirect: '/preface' }, ...docsRoute]
});


router.beforeEach((to, from, next) => {
  document.title = `${to.name} - Ykj UI Design`
  next();
});

export default router;
