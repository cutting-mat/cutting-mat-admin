export default [
  {
    path: "block",
    name: "区块组件",
    component: () => import("./views/Index.vue"),
    meta: {
      icon: "el-icon-menu",
    },
    children: [
      {
        path: "map-search",
        name: "地图搜索",
        component: () => import("./views/map-search.vue"),
      },
    ],
  },
];
