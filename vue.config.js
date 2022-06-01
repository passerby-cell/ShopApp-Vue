const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检测
  // 开启代理服务器
  devServer: {
    port: 10086,
    // 代理服务器可以将路由中的指定前缀转发到指定的后端服务器中
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        //ws: true, // 是否启用websockets
        //changeOrigin: true, // 代理时是否更改host
      }
    }
  }
})