module.exports = {
  chainWebpack: (config) => {
    console.log('config', config)
    // config.module.rule('scss').use('sass-loader').tap(options => {
    //   console.log('optin', options)
    // })
    // config.module.rule('images').use('file-loader')
  }
}