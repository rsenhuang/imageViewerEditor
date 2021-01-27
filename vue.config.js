// let path = require('path');

module.exports = {
  configureWebpack: config => {
    config.entry = process.env.NODE_ENV == 'development' ? './src/main.js' : './index.js'
    // config.output = {
    //   // path: path.resolve(__dirname, './dist'),
    //   filename: 'image-editor.js',
    //   library: 'image-editor',
    //   libraryTarget: 'umd',
    //   umdNamedDefine: true,
    // }
    // config.outputDir = path.resolve(__dirname, './dist')
  }
}