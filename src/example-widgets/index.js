
const ctx = require.context("./", true, /\.\/.+\/index.js/);
let routes = [];

ctx.keys().forEach((key) => {
    if (Array.isArray(ctx(key).default)) {
        routes = routes.concat(ctx(key).default);
    }

});

export { routes }

export default [{
    path: '/example-widgets',
    name: '组件库',
    component: (resolve) => require(['./Index.vue'], resolve),
    children: routes
}]
