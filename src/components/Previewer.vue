<template>
  <div class="canvas_container">
    <canvas id="canvas" width="500" height="400" style="border: 1px dashed #ddd;"></canvas>
    <canvas id="sketch" :width="sketchWidth" :height="sketchHeight" style="border: 1px dashed #ddd;"></canvas>
    <div class="acts">
        <div class="act_btn" @click="handleRotate(false)">逆时针旋转</div>
        <div class="act_btn" @click="handleRotate(true)">顺时针旋转</div>
        <div class="act_btn" @click="handleScale(true)">放大</div>
        <div class="act_btn" @click="handleScale(false)">缩小</div>
        <div class="act_btn">裁剪</div>
        <div class="act_btn">涂鸦</div>
        <div class="act_btn" @click="reset">还原</div>
        <div class="act_btn" @click="canvasToUrl">保存</div>
    </div>
    <div>
      <div>效果图</div>
      <img v-if="endImage" :src="endImage" alt="" height="300" />
    </div>
  </div>
</template>

<script>
let cxt = undefined;
const scopeX = 200;
const scopeY = 200;
export default {
  name: "Previewer",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
    return {
      center: {
        x: 0,
        y: 0,
      },
      endImage: '',
      sketchWidth: 0, // 效果
      sketchHeight: 0, // 效果
      direction: 1, // 旋转次数
      scale: 1 // 缩放比例
    }
  },
  created(){
    console.log('this', this, this.center)
  },
  mounted() {
    console.log('this', this, this.center.x)
    const c = document.getElementById("canvas");
    cxt = c.getContext("2d");  
    this.center.x = 250;
    this.center.y = 250;
    cxt.lineWidth = 1;
    // cxt.strokeRect(0.5, 0.5, 200, 200);  
    cxt.translate(this.center.x, this.center.y)
    let image = new Image();
    image.setAttribute("crossOrigin",'anonymous')
    image.src = this.imgs[0];
    let img = this.computedSize(image);
    this.sketchWidth = img.width;
    this.sketchHeight = img.height;
    cxt.drawImage(image, -img.width / 2, -img.height / 2, img.width, img.height);  
  },
  methods: {
    // 计算宽高
    computedSize(image = {}){
      console.log('计算', image.width, image.height)
      let height = 200,
      width = 200;
      if (image.width > image.height) {
        height = width * image.height / image.width;
      } else {
        width = height * image.width / image.height;
      }
      return {
        height,
        width
      }
    },
    handleRotate(direction){ 
      if (this.direction < 4){
        this.direction += 1;
      } else {
        this.direction = 1;
      }
      cxt.clearRect(-scopeX, -scopeY, 2 * scopeX, 2 * scopeY)
      cxt.rotate((direction ? 90 : -90)*Math.PI/180)
      // setTimeout(() => { 
      let image = new Image();
      image.src = this.imgs[0];
      image.setAttribute("crossOrigin",'anonymous');
      let img = this.computedSize(image);
      this.sketchWidth = (this.direction % 2 ? img.width : img.height) * this.scale;
      this.sketchHeight = (this.direction % 2 ? img.height : img.width) * this.scale;
      console.log('宽高', img.width, img.height, this.sketchWidth, this.sketchHeight)
      cxt.drawImage(image, -img.width / 2, -img.height / 2, img.width, img.height);
      // }, 1000)
    },
    handleScale(big = true) { 
      let size = 1 + (big ? 0.2 : -0.2)
      cxt.clearRect(-scopeX, -scopeY, 2 * scopeX, 2 * scopeY)
      cxt.scale(size, size)
      let image = new Image();
      image.src = this.imgs[0];
      image.setAttribute("crossOrigin",'anonymous');
      let img = this.computedSize(image);
      this.scale += (big ? 0.2 : -0.2);
      this.sketchWidth = img.width * this.scale;
      this.sketchHeight = img.height * this.scale;
      cxt.drawImage(image, -img.width / 2, -img.height / 2, img.width, img.height);
    }, 
    reset(){ 
      // 重置宽高
      this.sketchWidth = 0;
      this.sketchHeight = 0;
      this.scale = 1;
      this.direction = 1;
      cxt.lineWidth = 1;
      cxt.clearRect(-scopeX, -scopeY, 2 * scopeX, 2 * scopeY)
      // cxt.translate(this.center.x, this.center.y)
      setTimeout(() => { 
      let image = new Image();
      image.setAttribute("crossOrigin",'anonymous')
      image.src = this.imgs[0];
      let img = this.computedSize(image);
      console.log('reset', img.width, img.height)
      // cxt.drawImage(image, -img.width / 2, -img.height / 2, img.width, img.height); 
      cxt.drawImage(image, -img.width / 2, -img.height / 2, 112, 200); 
      }, 1000)
    },
    // 生成图片
    canvasToUrl(){ 
      // 在新的画布上绘制
      const sketch = document.getElementById('sketch');
      const sketchCxt = sketch.getContext('2d');  
      let canvasData = cxt.getImageData(scopeX - this.sketchWidth / 2, scopeY - this.sketchHeight / 2, this.sketchWidth, this.sketchHeight);
      // let canvasData = cxt.getImageData(250, 250, 100, 100);
      console.log('data', canvasData)
      sketchCxt.putImageData(canvasData, 0, 0);
      
      let url = sketch.toDataURL('image/png', 1); 
      this.endImage = url;
    }
  }
};
</script>

<style lang="scss">
.canvas_container {
  border: 1px solid #ddd;
  padding: 10px;
  width: 1000px;
  display: inline-block;
}
.acts{
display: flex;
flex-direction: row;
align-items: center;
}
.act_btn{
    margin-right: 20px;
    border: 1px solid #ddd;
width: 90px;
text-align: center;
border-radius: 5px;
color: #333;
padding: 10px 0;
&:hover{
    color: white;
    background: chocolate;
    border: 1px  solid chocolate;
    cursor: pointer;
}
}
</style>