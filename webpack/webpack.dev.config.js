const path = require('path')
const baseWebpackConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const webpack = require('webpack')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',// 设置mode属性的值为"development"后，process.env.NODE_ENV的值会被设置为"development"
  devtool: 'inline-source-map', // 可在浏览器控制台调试源码,不过会减慢打包速度
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"), // 告诉服务器文件资源在哪里
    open:true,
    hot: true,
    inline: true, // 实时刷新
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(), // 模块热更新插件
  ]
})
module.exports = devWebpackConfig;