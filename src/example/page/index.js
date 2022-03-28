export default [{
    path: 'page',
    name: '示例页面',
    component: (resolve) => require(['./views/Index.vue'], resolve),
    children: [{
            path: 'Edit',
            name: '内容编辑',
            component: (resolve) => require(['./views/Edit.vue'], resolve)
        },
        
    ]
}]