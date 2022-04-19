export default [{
    path: 'charts',
    name: '图表',
    component: () => import('./views/Index.vue'),
    children: [{
        path: 'readme',
        name: '可视化图表约定',
        component: () => import('./views/Readme.vue')
    },
    {
        path: 'chart',
        name: '混合图表（柱，线）',
        component: () => import('./views/Chart.vue')
    },
    {
        path: 'pie',
        name: '饼状图',
        component: () => import('./views/Pie.vue')
    },
    {
        path: 'progress',
        name: '进度图',
        component: () => import('./views/Progress.vue')
    },
    {
        path: 'radar',
        name: '雷达图',
        component: () => import('./views/Radar.vue')
    },
    {
        path: 'scatter',
        name: '散点图',
        component: () => import('./views/Scatter.vue')
    },
    {
        path: 'gauge',
        name: '仪表盘',
        component: () => import('./views/Gauge.vue')
    },
    {
        path: 'wave',
        name: '水球图',
        component: () => import('./views/Wave.vue')
    }
    ]
}]