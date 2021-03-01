# image-demo 
### 功能
本库主要用于图片的在线编辑，涉及旋转、缩放、裁切、涂鸦功能。

### 使用方式
npm安装
```
npm install -S image-viewer-editor @latest
```
安装后全局注入或局部引用
```
import ImageViewer from "image-viewer-editor";
Vue.use(ImageViewer);

<ImageViewer :imgUrl="imgUrl"
  :visible="show"
  @closed="show = false" />
```

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