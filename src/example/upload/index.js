export default [{
    path: 'upload',
    name: '上传',
    component: (resolve) => require(['./views/Index.vue'], resolve),
    children: [{
        path: 'file',
        name: '文件上传',
        component: (resolve) => require(['./views/file.vue'], resolve)
    },
    {
        path: 'single-img',
        name: '单图上传',
        component: (resolve) => require(['./views/single-img.vue'], resolve)
    },
    {
        path: 'img',
        name: '图片上传',
        component: (resolve) => require(['./views/img.vue'], resolve)
    },
    ]
}]