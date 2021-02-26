# image-demo 
### issues
1. 需要适配屏幕，根据比例缩放至屏幕可见区
2. 需要根据原图方向处理：横向/纵向
3. 切换图片的问题

### 使用提示
需要在vue.config.js中添加file-loader处理.cur文件，具体代码如下：
```
modules.export = {
  chainWebpack: config => {
    config.module.rule("file")
      .test(/\.(cur)$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]"
      })
      .end()
  }
}
```