module.exports = {
  // lintOnSave: false
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
};
