export default [{
  path: 'others',
  name: '其他',
  component: () => import('./views/Index.vue'),
  children: [{
    path: 'filePreview',
    name: 'Office文档预览',
    component: () => import('./views/file-preview.vue')
  }, {
    path: 'richtext',
    name: '富文本编辑/展示',
    component: () => import('./views/richtext.vue')
  },
  {
    path: 'fileImport',
    name: '文件导入',
    component: () => import('./views/file-import.vue')
  },
  {
    path: 'Watermark',
    name: '水印组件',
    component: () => import('./views/watermark.vue')
  },
  {
    path: 'input-vlaid',
    name: '输入验证',
    component: () => import('./views/input-vlaid.vue')
  },

  ]
}]