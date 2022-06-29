export default [
  {
    path: "layout",
    name: "布局组件",
    component: () => import("./views/Index.vue"),
    meta: {
      icon: "el-icon-s-fold",
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
