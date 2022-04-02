export default [{
    path: 'video',
    name: '视频相关',
    component: (resolve) => require(['./views/Index.vue'], resolve),
    children: [{
        path: 'videojs',
        name: 'videojs',
        component: (resolve) => require(['./views/videojs.vue'], resolve)
    },

    ]
}]