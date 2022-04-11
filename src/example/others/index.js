export default [{
  path: 'others',
  name: '其他',
  component: (resolve) => require(['./views/Index.vue'], resolve),
  children: [{
    path: 'filePreview',
    name: 'Office文档预览',
    component: (resolve) => require(['./views/file-preview.vue'], resolve)
  }, {
    path: 'richtext',
    name: '富文本编辑/展示',
    component: (resolve) => require(['./views/richtext.vue'], resolve)
  },
  {
    path: 'fileImport',
    name: '文件导入',
    component: (resolve) => require(['./views/file-import.vue'], resolve)
  },
  {
    path: 'Watermark',
    name: '水印组件',
    component: (resolve) => require(['./views/watermark.vue'], resolve)
  },
  {
    path: 'input-vlaid',
    name: '输入验证',
    component: (resolve) => require(['./views/input-vlaid.vue'], resolve)
  },

  ]
}]