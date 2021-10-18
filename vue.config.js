/*
 * @Author: 七画一只妖
 * @Date: 2021-10-13 21:15:32
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-13 22:55:53
 * @Description: file content
 */
const webpack = require('webpack');
module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
}