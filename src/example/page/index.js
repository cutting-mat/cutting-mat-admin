export default [{
    path: 'page',
    name: '示例页面',
    component: () => import('./views/Index.vue'),
    children: [{
        path: 'Edit',
        name: '内容编辑',
        component: () => import('./views/Edit.vue')
    },

    ]
}]