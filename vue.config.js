const path = require('path')
function resolve(dir){
  return path.join(__dirname, dir)
}
module.exports = { 
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => { 
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('~', resolve('packages'))
    config.module
      .rule('js')
      .include
      .add('/packages/')
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => { 
        return options
      })
    config.module.rule('file')  
      .test(/\.(cur)$/) 
      .use('file-loader')
      .loader('file-loader')
      .options( {  
        name: 'assets/[name].[hash:8].[ext]',
      })
      .end()
  },
}