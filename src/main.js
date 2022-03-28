// 根据.browserslistrc 配置加载polyfill, 需同时替换babel.config.js中注释的presets配置
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';

// 开启 mock
import mocker from '../mock';
mocker()

// UI库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import '@/core/element-theme/index.css';
Vue.use(ElementUI);

// 全局样式
import '@/core/assets/global.css';

// 核心插件
import plugins from '@/core/plugins';
Vue.use(plugins);

// 大屏动画插件
import customPlugin from '@cutting-mat/animater';
Vue.use(customPlugin);

// 组件库
import widgets from '@/widgets'
Vue.use(widgets)

// 路由
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
import App from './App.vue';

new Vue({
    router: routeInstance,
    render: h => h(App)
}).$mount('#app');