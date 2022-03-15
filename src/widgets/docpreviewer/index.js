// 调试开关
const DEBUG = process.env.NODE_ENV === "development";

// 自动注册vue组件（排除以'__'开头）
const ctx = require.context("./", true, /^\.\/[^__]+\.vue/);
let componentsMap = {};
ctx.keys().forEach((key) => {
    const cname = key.replace(/^\.\//, "").replace(/\.vue$/, "").replace(/\//g, "-");
    componentsMap[cname] = ctx(key).default;
});

export default {
    install: function (Vue, Namespace) {
        Object.keys(componentsMap).forEach(key => {
            const widgetName = [Namespace || '', key.replace(/main$/, "")].join('-').replace(/-$/, "")
            Vue.component(widgetName, componentsMap[key])
            DEBUG && console.log('注册组件', widgetName)
        })
    },
};
