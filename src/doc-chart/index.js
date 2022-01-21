export default [{
    path: '/chart',
    name: '图表',
    component: (resolve) => require(['./views/Index.vue'], resolve),
    children: [{
            path: 'readme',
            name: '可视化图表约定',
            component: (resolve) => require(['./views/Readme.vue'], resolve)
        },
        {
            path: 'chart',
            name: '混合图表（柱，线）',
            component: (resolve) => require(['./views/Chart.vue'], resolve)
        },
        {
            path: 'pie',
            name: '饼状图',
            component: (resolve) => require(['./views/Pie.vue'], resolve)
        },
        {
            path: 'progress',
            name: '进度图',
            component: (resolve) => require(['./views/Progress.vue'], resolve)
        },
        {
            path: 'radar',
            name: '雷达图',
            component: (resolve) => require(['./views/Radar.vue'], resolve)
        },
        {
            path: 'scatter',
            name: '散点图',
            component: (resolve) => require(['./views/Scatter.vue'], resolve)
        },
        {
            path: 'gauge',
            name: '仪表盘',
            component: (resolve) => require(['./views/Gauge.vue'], resolve)
        },
        {
            path: 'wave',
            name: '水球图',
            component: (resolve) => require(['./views/Wave.vue'], resolve)
        }
    ]
}]