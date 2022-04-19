// 调试开关
const DEBUG = process.env.NODE_ENV === "development";
import packageInfo from "./package.json";
// 搜索vue组件（排除以'__'开头）
const componentCtx = import.meta.globEager("./!(__)*.vue");

export default {
    install: function (Vue, Namespace) {
        if (Object.keys(componentCtx).length) {
            Object.keys(componentCtx).forEach((key) => {
                const fileName = key.replace(/^\.\//, "").replace(/\.vue$/, "").replace(/\//g, "-");
                const widgetName = [Namespace || '', fileName.replace(/main$/, "")].join('-').replace(/-$/, "")
                Vue.component(widgetName, componentCtx[key].default)
                DEBUG && console.log(`[Widget] ${packageInfo.name} v${packageInfo.version}: 注册组件 <${widgetName}>`)
            });
        }

    },
};
