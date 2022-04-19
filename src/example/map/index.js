export default [{
    path: 'map',
    name: '地图',
    component: () => import('./views/Index.vue'),
    children: [{
        path: 'Nearby',
        name: '搜索附近',
        component: () => import('./views/Nearby.vue')
    },
    ]
}]