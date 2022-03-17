export default [{
    path: 'template',
    name: '图表',
    component: (resolve) => require(['./views/Index.vue'], resolve),
    children: [{
            path: 'demo',
            name: 'demo',
            component: (resolve) => require(['./views/demo.vue'], resolve)
        },
        
    ]
}]