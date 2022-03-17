// 调试开关
const DEBUG = false;

const ctx = require.context("./", true, /^\.\/[^__]+index\.js$/);

export default {
    install: function (Vue) {
        ctx.keys().forEach((key) => {
            const widgetNamespace = key.replace('./','').replace('/index.js','');
            try {
                Vue.use(ctx(key).default, widgetNamespace)
                DEBUG && console.log('注册 widget：', key)
            } catch (err) {
                DEBUG && console.warn('注册 widget：', key, err)
            }

        });
    },
};
