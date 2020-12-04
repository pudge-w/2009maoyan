const path = require("path");

module.exports = {
  // lintOnSave: false
  devServer: {
    proxy: {
      "/ajax": {
        target: "https://m.maoyan.com",
        ws: true,
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("com", path.join(__dirname, "./src/components"));
  }
};
