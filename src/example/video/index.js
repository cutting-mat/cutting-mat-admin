export default [{
    path: 'video',
    name: '视频相关',
    component: () => import('./views/Index.vue'),
    children: [{
        path: 'videojs',
        name: 'videojs',
        component: () => import('./views/videojs.vue')
    },

    ]
}]