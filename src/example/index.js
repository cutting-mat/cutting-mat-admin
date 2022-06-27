const ctx = import.meta.globEager("./!(__)*/index.js");
export let routes = [];

Object.keys(ctx).forEach((key) => {
  if (Array.isArray(ctx[key].default)) {
    routes = routes.concat(ctx[key].default);
  }
});

export default [...routes];
