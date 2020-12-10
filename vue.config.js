// /* eslint-disable @typescript-eslint/no-var-requires */
// /*
//  *Vue-CLI项目的核心配置文件
//  */
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const webpack = require('webpack')
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const CopyWebpackPlugin = require('copy-webpack-plugin') // 引入插件

// module.exports = {
//   configureWebpack: {
//     publicPath: '/', // 根路径
//     outputDir: 'dist', // 构建输出目录
//     assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
//     lintOnSave: true, // 是否开启eslint保存检测，有效值：true || false || 'error'
//     // configureWebpack是vueCLI3.0中用于配置webpack插件参数的地方，你在这里设置，会新建或覆盖webpack默认配置
//     // webpack ProvidePlugin的含义是创建一个全局的变量，使这个变量在webpack各个模块内都可以使用。这里的配置含义是创建'$'、'jQuery'、'window.jQuery'三个变量指向jQuery依赖，创建'Popper'变量指向popper.js依赖。
//     plugins: [
//       new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery',
//         'window.jQuery': 'jquery',
//         Popper: ['popper.js', 'default']
//       }),
//       new CopyWebpackPlugin([{ from: './node_modules/jquery/dist/jquery.min.js', to: './static/jquery.min.js' }])
//     ]
//   },
//   chainWebpack: config => {
//     // config.plugin('copy')
//     //   .tap(args => {
//     //     const list = args[0]
//     //     list.push({
//     //       from: './node_modules/jquery/dist/jquery.min.js',
//     //       to: './static/jquery.min.js'
//     //     })
//     //     return args
//     //   })
//   }
//   //   devServer: {
//   //     open: false, //是否在启动项目完成后自动弹出浏览器窗口
//   //     host: "localhost", //'0.0.0.0'真机测试  域名
//   //     port: 8081, //端口号的配置
//   //     https: false, //是否使用https协议
//   //     hotOnly: false, //热更新修改的模块，窗口不会刷新
//   //     proxy: {
//   //       "/api": {
//   //         target: "http://www.thenewstep.cn/", //接口域名
//   //         changeOrigin: true, //是否跨域
//   //         pathRewrite: {
//   //           "^/api": ""
//   //         }
//   //       }
//   //     }
//   //   }
// }
