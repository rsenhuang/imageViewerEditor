 
module.exports = { 
  chainWebpack: config => { 
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