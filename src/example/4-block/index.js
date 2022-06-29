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
        path: "curd",
        name: "增删改查",
        component: () => import("./views/curd.vue"),
      },
      {
        path: "curd/RoleList",
        name: "增删改查-基本应用",
        component: () => import("./views/curd/RoleList.vue"),
        meta: {
          title: "基本应用-角色列表",
          hide: true,
        },
      },
      {
        path: "curd/Dict",
        name: "增删改查-Table高级配置",
        component: () => import("./views/curd/Dict.vue"),
        meta: {
          title: "Table高级配置-字典管理",
          hide: true,
        },
      },
      {
        path: "curd/Account",
        name: "增删改查-From高级配置",
        component: () => import("./views/curd/Account.vue"),
        meta: {
          title: "From高级配置-账号管理",
          hide: true,
        },
      },
      {
        path: "curd/MultiHeader",
        name: "增删改查-多级表头",
        component: () => import("./views/curd/MultiHeader.vue"),
        meta: {
          title: "多级表头",
          hide: true,
        },
      },
      {
        path: "map-search",
        name: "地图搜索",
        component: () => import("./views/map-search.vue"),
      },
    ],
  },
];
