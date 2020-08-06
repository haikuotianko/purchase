module.exports = {
  lintOnSave: false,
  devServer: {

    public: 'http://192.168.0.29:8080',

    hot: true,

    disableHostCheck: true,
    // 设置代理
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'https://s.search.bilibili.com/main/hotword',
        // 如果要代理 websockets
        ws: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },


}