
const ctx = require.context("./", true, /^\.\/[^__]+index\.js$/);
export let routes = [];

ctx.keys().forEach((key) => {
    if (Array.isArray(ctx(key).default)) {
        routes = routes.concat(ctx(key).default);
    }

});

export default [{
    path: '/example',
    name: '组件示例',
    component: (resolve) => require(['./Index.vue'], resolve),
    meta: {
        hide: true
    },
    children: routes
}]
