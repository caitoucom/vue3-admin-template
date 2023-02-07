const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
    // 处理css转rem
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({
                        exclude: /(node_module)/,
                        mediaQuery: false,
                        minPixelValue: 3
                    })
                ]
            }
        }
    },
    // 跨域配置
    devServer: {
        host: "192.168.1.124",//要设置当前访问的ip 否则失效
        open: true, //浏览器自动打开页面
        proxy: {
            '/api': {
                target: 'http://192.168.1.124:3000',
                // ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    // 配置@ 为src文件夹
    chainWebpack: (config) => {
        config.resolve.alias.set('@', resolve('./src'))
    },
    // 网站icon图标
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
    productionSourceMap: false, // 生成环境不生产map文件
}