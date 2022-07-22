const ctx = import.meta.glob("./!(__)*/index.js", { eager: true });
export let routes = [];

Object.keys(ctx).forEach((key) => {
  if (Array.isArray(ctx[key].default)) {
    routes = routes.concat(ctx[key].default);
  }
});

export default [...routes];
