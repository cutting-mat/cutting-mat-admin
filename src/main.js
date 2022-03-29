// 根据.browserslistrc 配置加载polyfill, 需同时替换babel.config.js中注释的presets配置
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';

// 开启 mock
// import mocker from '../mock';
// mocker()

// 加载根组件
import App from './App.vue';

// 预安装
import preInstall from '@/pre-install';
Vue.use(preInstall);

// 安装核心插件
import plugins from '@/core/plugins';
Vue.use(plugins);

// 创建路由实例
import { routeGenerator } from '@/core';
const routeInstance = routeGenerator({
    beforeEach: ((to, from, next) => {
        if (to.name) {
            document.title = to.meta.title || to.name;
        }
        next()
    })
})

// 应用启动
new Vue({
    router: routeInstance,
    render: h => h(App)
}).$mount('#app');