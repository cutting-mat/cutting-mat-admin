export default [{
    path: 'upload',
    name: '上传',
    component: () => import('./views/Index.vue'),
    children: [{
        path: 'file',
        name: '文件上传',
        component: () => import('./views/file.vue')
    },
    {
        path: 'single-img',
        name: '单图上传',
        component: () => import('./views/single-img.vue')
    },
    {
        path: 'img',
        name: '图片上传',
        component: () => import('./views/img.vue')
    },
    ]
}]