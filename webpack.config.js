const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    host:'localhost',
    port:'8080'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader//不用使用style-loader
        }, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: "css/[id].css"
    }),
    new HtmlWebpackPlugin({
      title: 'index',
      template: './src/entry.html'
    })
  ]
}