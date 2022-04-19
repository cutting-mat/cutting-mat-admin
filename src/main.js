// 开启 mock
import mocker from '../mock';
mocker()

import Vue from 'vue';

// 加载根组件
import App from './App.vue';

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

// 预安装
import preInstall from '@/pre-install';
Vue.use(preInstall);

// 加载核心插件
import plugins from '@/core/plugins';
Vue.use(plugins);

// 大屏动画插件
import animater from '@cutting-mat/animater';
Vue.use(animater);

// 组件库
import widgets from '@/widgets'
Vue.use(widgets)

// 创建应用
const app = new Vue({
    router: routeInstance,
    render: h => h(App)
})

// 挂载应用
app.$mount('#app');