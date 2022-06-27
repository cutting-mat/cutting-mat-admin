export default [
  {
    path: "component",
    name: "内置组件",
    component: () => import("./views/Index.vue"),
    meta: {
      icon: "el-icon-star-on",
    },
    children: [
      {
        path: "CountDown",
        name: "倒计时",
        component: () => import("./views/CountDown.vue"),
      },
      {
        path: "InputNumber",
        name: "数字输入框",
        component: () => import("./views/InputNumber.vue"),
      },
      {
        path: "InputPassword",
        name: "密码输入框",
        component: () => import("./views/InputPassword.vue"),
      },
      {
        path: "uploader",
        name: "上传组件",
        component: () => import("./views/Uploader.vue"),
      },
      {
        path: "DickControl",
        name: "数据字典控件",
        component: () => import("./views/DickControl.vue"),
      },
      {
        path: "CURD",
        name: "增删改查组件",
        component: () => import("./views/CURD.vue"),
        children: [
          {
            path: "CURDRoleList",
            name: "增删改查-基本应用",
            component: () => import("./views/CURDRoleList.vue"),
            meta: {
              title: "基本应用",
            },
          },
          {
            path: "CURDDict",
            name: "增删改查-Table高级配置",
            component: () => import("./views/CURDDict.vue"),
            meta: {
              title: "Table高级配置",
            },
          },
          {
            path: "CURDAccount",
            name: "增删改查-From高级配置",
            component: () => import("./views/CURDAccount.vue"),
            meta: {
              title: "From高级配置",
            },
          },
          {
            path: "CURDMultiHeader",
            name: "增删改查-多级表头",
            component: () => import("./views/CURDMultiHeader.vue"),
            meta: {
              title: "多级表头",
            },
          },
        ],
      },
    ],
  },
];
