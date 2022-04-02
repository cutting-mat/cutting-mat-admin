export default [{
    path: 'component',
    name: '内置组件',
    component: (resolve) => require(['./views/Index.vue'], resolve),
    children: [{
        path: 'InputNumber',
        name: '数字输入框',
        component: (resolve) => require(['./views/InputNumber.vue'], resolve)
    }, {
        path: 'upload',
        name: '上传组件',
        component: (resolve) => require(['./views/Upload.vue'], resolve)
    }, {
        path: 'DickControl',
        name: '数据字典控件',
        component: (resolve) => require(['./views/DickControl.vue'], resolve)
    }, {
        path: 'Password',
        name: '密码输入框',
        component: (resolve) => require(['./views/Password.vue'], resolve)
    }, {
        path: 'CURD',
        name: '增删改查组件',
        component: (resolve) => require(['./views/CURD.vue'], resolve),
        children: [{
            path: 'CURDRoleList',
            name: '增删改查-基本应用',
            component: (resolve) => require(['./views/CURDRoleList.vue'], resolve),
            meta: {
                title: '基本应用'
            }
        }, {
            path: 'CURDDict',
            name: '增删改查-Table高级配置',
            component: (resolve) => require(['./views/CURDDict.vue'], resolve),
            meta: {
                title: 'Table高级配置'
            }
        }, {
            path: 'CURDAccount',
            name: '增删改查-From高级配置',
            component: (resolve) => require(['./views/CURDAccount.vue'], resolve),
            meta: {
                title: 'From高级配置'
            }
        }, {
            path: 'CURDMultiHeader',
            name: '增删改查-多级表头',
            component: (resolve) => require(['./views/CURDMultiHeader.vue'], resolve),
            meta: {
                title: '多级表头'
            }
        }
        ]
    }]
}]
