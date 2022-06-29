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
        path: "Rules",
        name: "约定",
        component: () => import("./views/Rules.vue"),
      },
      {
        path: "Chart",
        name: "柱形图&线型图",
        component: () => import("./views/Chart.vue"),
      },
      {
        path: "Pie",
        name: "饼状图",
        component: () => import("./views/Pie.vue"),
      },
      {
        path: "Radar",
        name: "雷达图",
        component: () => import("./views/Radar.vue"),
      },
      {
        path: "Scatter",
        name: "散点图",
        component: () => import("./views/Scatter.vue"),
      },
      {
        path: "Gauge",
        name: "仪表盘",
        component: () => import("./views/Gauge.vue"),
      },
    ],
  },
];
