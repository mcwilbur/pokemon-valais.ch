module.exports = {
  filenameHashing: false,
  outputDir: '_includes/vue_pages',
  assetsDir: '../../assets',
  publicPath: '/',
  pages: {
    'events': {
      entry: './src/pages/Events/main.js',
      template: './src/app.html',
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