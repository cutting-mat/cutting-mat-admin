export default [{
    path: 'map',
    name: '地图',
    component: (resolve) => require(['./views/Index.vue'], resolve),
    children: [{
            path: 'Nearby',
            name: '搜索附近',
            component: (resolve) => require(['./views/Nearby.vue'], resolve)
        },
    ]
}]