/**
 * 模块配置文件
 * 必须输出 mainModule[Router Array] 和 subModules[Router Array]
 * */ 

// 主模块
export { default as mainModule } from '@/main/index'

// 子模块（开启权限控制模式下，业务模块受登录用户权限控制）
import example from '@/example'
import exampleWidgets from '@/example-widgets'
import system from '@/system'
import user from '@/user'

export const subModules =  [
    ...example,
    ...exampleWidgets,
    ...system,
    ...user,
]
