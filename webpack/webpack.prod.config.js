const baseWebpackConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',// 设置mode属性的值为"development"后，process.env.NODE_ENV的值会被设置为"production"
  devtool: 'source-map', // 生产环境可在浏览器上调试源码，不建议，这样会暴露源码。可设置为none
  plugins: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})// 压缩css代码，去掉空格这些，在安装在生产环境下
    ]
  }
})
module.exports = prodWebpackConfig;