export default [{
    path: 'template',
    name: '图表',
    component: () => import('./views/Index.vue'),
    children: [{
        path: 'demo',
        name: 'demo',
        component: () => import('./views/demo.vue')
    },

    ]
}]