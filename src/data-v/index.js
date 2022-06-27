export default [
  {
    path: "/data-v",
    name: "数据可视化",
    component: () => import("./views/Index.vue"),
    meta: {
      icon: "el-icon-s-platform",
    },
    children: [
      {
        path: "visual",
        name: "演示1",
        meta: {
          title: "匿名模式",
          link: "https://github.com/cutting-mat/animater/blob/main/src/data-v/views/Visual.vue",
          description: "最简单的应用方式，匿名动画组元素依次进场",
        },
        component: () => import("./views/Visual.vue"),
      },
      {
        path: "visual2",
        name: "演示2",
        meta: {
          title: "受控模式",
          link: "https://github.com/cutting-mat/animater/blob/main/src/data-v/views/Visual2.vue",
          description: "支持 `v-modle / value`, 通过数据驱动进出场状态",
        },
        component: () => import("./views/Visual2.vue"),
      },
      {
        path: "visual3",
        name: "演示3",
        meta: {
          title: "编排模式",
          link: "https://github.com/cutting-mat/animater/blob/main/src/data-v/views/Visual3.vue",
          description: "为动画元素编组，用实例方法控制各动画组切换",
        },
        component: () => import("./views/Visual3.vue"),
      },
      {
        path: "visual4",
        name: "演示4",
        component: () => import("./views/visual4.vue"),
        meta: {
          title: "页面离场动画",
          link: "https://github.com/cutting-mat/animater/blob/main/src/data-v/views/Visual4.vue",
          description:
            "配合 VueRouter 的 `beforeRouteLeave` 钩子, 实现页面离场动画",
        },
      },
    ],
  },
];
