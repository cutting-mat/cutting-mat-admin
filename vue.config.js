
/**
 * vue-cli配置
 * */ 
module.exports = {
    transpileDependencies: [],                                  // 需要babel编译的依赖包名
    css: {
        sourceMap: true                                         // 开启css map
    },
    productionSourceMap: false,                                 // 生产环境关闭map
    integrity: process.env.NODE_ENV === 'production',           // 子资源完整性校验（SRI）
    outputDir: 'docs',                                          // 构建目录，默认'dist'
    publicPath: process.env.NODE_ENV === 'production'           // 网址根路径，需要配置服务器转发
    ? '/cutting-mat-admin/'
    : '/'      
}