/**
 * 模块配置文件
 * 约定1： 该文件必须输出 主路由(MainRoute) 和 旁路路由(BypassRoute)，格式均为 [Route Array]
 * 约定2： 主路由受访问限制，旁路路由不受访问限制 (account-auth、access-control)
 * */

// 主模块
import main from "@/main/index";

// 业务模块
// import system from '@/system'
// import user from '@/user'
import example from "@/example";
import dataV from "@/data-v";

// 主路由
export const MainRoute = [
  Object.assign({}, main[0], {
    children: [...example],
  }),
  ...dataV,
];

// 旁路路由
export const BypassRoute = [...main.slice(1)];
