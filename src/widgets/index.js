const ctx = require.context("./", true, /^\.\/[^__]+\.vue/);
let componentsMap = {};
ctx.keys().forEach((key) => {
    const cname = key.replace("./", "").replace(".vue", "").replace("/index", "").replace(/\//g, "-");
    componentsMap[cname] = ctx(key).default;
});

export default {
    install: function (Vue) {
        // 全局注册
        Object.keys(componentsMap).forEach(key => {
            Vue.component(key, componentsMap[key])
        })
    },
};
