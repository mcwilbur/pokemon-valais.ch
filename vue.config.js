module.exports = {
  filenameHashing: false,
  outputDir: '_includes/vue_pages',
  assetsDir: '../../assets',
  publicPath: '',
  pages: {
    'events': {
      bundle: 'events',
      entry: './src/pages/Events/main.js',
      assetsPublicPath: '/assets',
      assetsDir: '../../assets',
      inject: false,
      template: './src/index.ejs',
      appMountId: 'app',
      minify: { collapseWhitespace: false },
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'events' ]
    },
    'about': {
      entry: './src/pages/About/main.js',
      template: './src/app.html',
      title: 'About',
      chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
    }
  }
}