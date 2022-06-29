export default [
  {
    path: "chart",
    name: "图表组件",
    component: () => import("./views/Index.vue"),
    meta: {
      icon: "el-icon-s-data",
    },
    children: [
      {
        path: "demo",
        name: "demo",
        component: () => import("./views/demo.vue"),
      },
    ],
  },
];
