module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    devtool: 'source-map',
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
  outputDir: '../site/admin',
};
