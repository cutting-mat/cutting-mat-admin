export default [
  {
    path: "page",
    name: "页面组件",
    component: () => import("./views/Index.vue"),
    meta: {
      icon: "el-icon-s-shop",
    },
    children: [
      {
        path: "Edit",
        name: "内容编辑",
        component: () => import("./views/Edit.vue"),
      },
    ],
  },
];
