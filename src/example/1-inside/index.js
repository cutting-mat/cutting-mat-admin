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
    ],
  },
];
