/**
 * 全局组件
 * */ 
import Header from '@/main/components/Header.vue'

export const components = {
    // 内置组件
    CURD:  () => import("@/core/components/CURD.vue"),
    DictCascader:  () => import("@/core/components/DictCascader.vue"),
    DictCheckbox:  () => import("@/core/components/DictCheckbox.vue"),
    DictRadio:  () => import("@/core/components/DictRadio.vue"),
    DictSelect:  () => import("@/core/components/DictSelect.vue"),
    InputNumber:  () => import("@/core/components/InputNumber.vue"),
    InputPassword:  () => import("@/core/components/InputPassword.vue"),
    // 业务组件
    Header,
    Breadcrumb: () => import("@/main/components/Breadcrumb.vue"),
    SubNav: () => import("@/main/components/SubNav.vue"),
    Pagination: () => import("@/main/components/Pagination.vue"),
}

/**
 * 全局过滤器
 * */ 
import { util } from '@/core'

export const filters = {
    date: util.formatDate
}

/**
 * 全局方法
 * */ 
export const methods = {
    globalMethod: function(){
        return ('test globalMethod output!')
    }
}

/**
 * 全局指令
 * */ 
export const directives = {
    'auth': {
        // 不开启权限控制时避免v-auth指令报错
    },
    'test': {
        // 用于测试可删除
        inserted (el) {
            setTimeout(() => {
                el.innerText += ' test directive inject!'
            }, 0)
        }
    }
}

/**
 * 实例方法
 * */ 
export const $methods = {
    $myMethod: function(){
        // 用于测试可删除
        return ('test instance method output!')
    }
}
