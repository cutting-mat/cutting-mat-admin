/**
 * 身份验证
 * 输出：
 * 全局组件<auth>
 * */
import auth from "./components/Auth";

export const install = function (Vue) {
    Vue.component('Auth', auth)
}