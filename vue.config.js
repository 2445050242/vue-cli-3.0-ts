module.exports = {
    // 基本路径
    baseUrl: "./",
    lintOnSave: false,
    // 服务器设置
    devServer: {
        historyApiFallback: {
            index: 'index.html'
        },
        hot: true,
        proxy: {
            '/api': {
                target: "https://www.kuaidimao.com/",
                changeOrigin: true,
                secure: false,
            }
        }
    },
    // webpack配置
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
          config.devtool = 'source-map'
          // mutate config for production...
        } 
    },
    // chainWebpack: config => {
    //     config.resolve.alias.set('style',resolve('src/assets/styles'))
    // },
}