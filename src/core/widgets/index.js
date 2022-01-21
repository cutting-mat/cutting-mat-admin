const ctx = require.context("./", true, /([^__]+)\.vue$/);
let componentsMap = {};
ctx.keys().forEach((key) => {
    const cname = key.replace("./", "").replace("index.vue", "").replace(".vue", "").replace(/\//g, "_");
    componentsMap[cname] = ctx(key).default;
});

export default componentsMap;
