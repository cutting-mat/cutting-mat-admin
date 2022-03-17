export default [{
    path: 'upload',
    name: '上传',
    component: (resolve) => require(['./views/Index.vue'], resolve),
    children: [{
            path: 'file',
            name: '文件上传',
            component: (resolve) => require(['./views/file.vue'], resolve)
        },
        
    ]
}]