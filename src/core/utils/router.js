import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 加载所有模块路由
import { subModules, mainModule } from '../../module.config'

export default function () {
  // 拼装路由
  mainModule[0].children = Vue.prototype.$AccessControl ? [] : subModules;

  // 路由实例
  const route = new Router({
    routes: mainModule
  });

  if (Vue.setRouterGuards) {
    Vue.setRouterGuards(route, mainModule)
  }

  route.beforeEach((to, from, next) => {
    if (to.name) {
      document.title = to.meta.title || to.name;
    }
    next()
  })

  return route
}
