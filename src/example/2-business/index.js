export default [
  {
    path: "business",
    name: "业务组件",
    component: () => import("./views/Index.vue"),
    meta: {
      icon: "el-icon-s-grid",
    },
    children: [
      {
        path: "richtext",
        name: "富文本编辑/展示",
        component: () => import("./views/richtext.vue"),
      },
      {
        path: "fileImport",
        name: "文件导入",
        component: () => import("./views/file-import.vue"),
      },
      {
        path: "input-valid",
        name: "输入验证",
        component: () => import("./views/input-valid.vue"),
      },
      {
        path: "upload-file",
        name: "文件上传",
        component: () => import("./views/upload-file.vue"),
      },
      {
        path: "upload-img",
        name: "图片上传",
        component: () => import("./views/upload-img.vue"),
      },
      {
        path: "upload-single-img",
        name: "单图上传",
        component: () => import("./views/upload-single-img.vue"),
      },
    ],
  },
];
