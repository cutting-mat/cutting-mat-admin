export default [{
    path: 'map',
    name: '地图',
    component: (resolve) => require(['./views/Index.vue'], resolve),
    children: [{
            path: 'bmap',
            name: '百度地图',
            component: (resolve) => require(['./views/BMap.vue'], resolve)
        },
    ]
}]