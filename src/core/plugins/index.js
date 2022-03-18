// 调试开关
const DEBUG = process.env.NODE_ENV === "development";

const ctx = require.context("./", true, /^\.\/[^__]+index\.js$/);

export default {
    install: function (Vue) {
        ctx.keys().forEach((key) => {
            if (ctx(key).install) {
                Vue.use(ctx(key).install, ctx(key).config)
                DEBUG && console.log(`[Core] Plugin Loaded: ${key}`)
            }
        });
    },
};
