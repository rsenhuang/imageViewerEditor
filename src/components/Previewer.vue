<template>
  <div class="canvas_container">
    <canvas id="canvas"
            :width="scopeX"
            :height="scopeY"
            style="border: 1px dashed #ddd;"></canvas>
    <canvas id="sketch"
            :width="sketchWidth"
            :height="sketchHeight"
            style="border: 1px dashed #ddd;"></canvas>
    <div class="acts">
      <div class="act_btn"
           @click="handleRotate(false)">逆时针旋转</div>
      <div class="act_btn"
           @click="handleRotate(true)">顺时针旋转</div>
      <div class="act_btn"
           @click="handleScale(true)">放大</div>
      <div class="act_btn"
           @click="handleScale(false)">缩小</div>
      <div class="act_btn">裁剪</div>
      <div class="act_btn" @click="toggleGraffiti">涂鸦</div>
      <div class="act_btn"
           @click="reset">还原</div>
      <div class="act_btn"
           @click="canvasToUrl">保存</div>
    </div>
    <div>
      <div>效果图</div>
      <img v-if="endImage"
           :src="endImage"
           alt=""
           height="300" />
    </div>
  </div>
</template>

<script>
let cxt = undefined;
let canvas = undefined;
export default {
  name: "Previewer",
  props: {
    imgUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      center: {
        x: 0,
        y: 0
      }, // 原点位置
      endImage: "",
      sketchWidth: 0, // 效果
      sketchHeight: 0, // 效果
      direction: 1, // 旋转角度1-4：0、90°、180°、270°
      scale: 1, // 缩放比例
      scopeX: 1000, // 图片大小（宽）
      scopeY: 1000 // 图片大小（高）
    };
  },
  mounted() {
    canvas = document.getElementById("canvas");
    cxt = canvas.getContext("2d");
    let image = new Image();
    image.onload = () => {
      console.log("loaded");
    };
    image.onerror = err => {
      console.log("loaded err", err);
    };
    image.setAttribute("crossOrigin", "anonymous");
    image.src = this.imgUrl;
    image.addEventListener("load", () => {
      let img = this.computedSize(image);
      this.sketchWidth = img.width;
      this.sketchHeight = img.height;
      this.center.x = this.scopeX / 2;
      this.center.y = this.scopeY / 2;
      cxt.lineWidth = 1;
      this.$nextTick(() => {
        // 动态修改canvas宽高会导致canvas重新渲染
        // cxt.translate(this.scopeX / 2, this.scopeY / 2); 
        // this.center.x += this.scopeX / 2;
        // this.center.y += this.scopeY / 2;
        this.moveCenter(this.scopeX / 2, this.scopeY / 2);
        cxt.drawImage(
          image,
          -img.width / 2,
          -img.height / 2,
          img.width,
          img.height
        );
      });
    });
  },
  methods: {
    moveCenter(x = 0, y = 0){ 
      cxt.translate(x, y);
      this.center.x += x;
      this.center.y += y;
    },
    // 计算宽高
    computedSize(image = {}) { 
      let long = image.width > image.height ? image.width : image.height
      let short = image.width > image.height ? image.height : image.width
      if(this.direction % 2){ 
        this.scopeX = long;
        this.scopeY = short
      } else { 
        this.scopeX = short;
        this.scopeY = long
      }   
      return {
        height: image.height,
        width: image.width
      };
    },
    handleRotate(clockwise = true) {
      // 顺时针+1，逆时针-1
      if (clockwise) {
        if (this.direction < 4) {
          this.direction += 1;
        } else {
          this.direction = 1;
        }
      } else {
        if (this.direction === 1) {
          this.direction = 4;
        } else {
          this.direction -= 1;
        }
      }
      cxt.clearRect(
        -this.scopeX,
        -this.scopeY,
        2 * this.scopeX,
        2 * this.scopeY
      );
      let image = new Image();
      image.setAttribute("crossOrigin", "anonymous");
      image.src = this.imgUrl;
      image.addEventListener("load", () => { 
        this.moveCenter(-this.scopeX / 2, -this.scopeY / 2)
        let img = this.computedSize(image); 
        this.$nextTick(() => {
          this.sketchWidth =
            (this.direction % 2 ? img.width : img.height) * this.scale;
          this.sketchHeight =
            (this.direction % 2 ? img.height : img.width) * this.scale;
          if (this.sketchWidth > this.scopeX) {
            this.sketchWidth = this.scopeX;
          }
          if (this.sketchHeight > this.scopeY) {
            this.sketchHeight = this.scopeY;
          } 
          this.moveCenter(this.scopeX / 2, this.scopeY / 2)
          cxt.rotate(((5 - this.direction) * -90 * Math.PI) / 180);
          cxt.drawImage(
            image,
            -img.width / 2,
            -img.height / 2,
            img.width,
            img.height
          );
        });
      });
    },

    // 缩放
    handleScale(big = true) {
      let size = 1 + (big ? 0.2 : -0.2);
      this.scale = this.scale * (big ? 1.2 : 0.8);
      cxt.clearRect(
        -this.scopeX,
        -this.scopeY,
        2 * this.scopeX,
        2 * this.scopeY
      );
      cxt.scale(size, size);
      let image = new Image();
      image.src = this.imgUrl;
      image.setAttribute("crossOrigin", "anonymous");
      image.addEventListener("load", () => {
        let img = this.computedSize(image);
        this.sketchWidth = img.width * this.scale;
        this.sketchHeight = img.height * this.scale;
        if (this.sketchWidth > this.scopeX) {
          this.sketchWidth = this.scopeX;
        }
        if (this.sketchHeight > this.scopeY) {
          this.sketchHeight = this.scopeY;
        }
        this.$nextTick(() => {
          cxt.drawImage(
            image,
            -img.width / 2,
            -img.height / 2,
            img.width,
            img.height
          );
        });
      });
    },
    reset() {
      // 重置宽高
      this.sketchWidth = 0;
      this.sketchHeight = 0;
      cxt.lineWidth = 1;
      this.center = {
        x: 0,
        y: 0,
      }
      cxt.clearRect(
        -this.scopeX,
        -this.scopeY,
        2 * this.scopeX,
        2 * this.scopeY
      );
      let image = new Image();
      image.setAttribute("crossOrigin", "anonymous");
      image.src = this.imgUrl;
      this.scopeX = image.width;
      this.scopeY = image.height;
      image.addEventListener("load", () => { 
        this.$nextTick(() => {
          // 动态修改canvas宽高会导致canvas重新渲染
          // 缩放复原
          cxt.scale(1 / this.scale, 1 / this.scale);
          this.scale = 1;
          // 旋转复原 
          if (this.direction % 2){ 
            cxt.rotate(((5 - this.direction) * 90 * Math.PI) / 180);
          } else {  
            this.moveCenter(image.width / 2 , image.height / 2)
          }
          this.direction = 1; 
          this.sketchWidth = image.width;
          this.sketchHeight = image.height; 
          cxt.drawImage(
            image,
            -image.width / 2,
            -image.height / 2,
            image.width,
            image.height
          );
        });
      });
    },
    // 启动涂鸦
    toggleGraffiti(active = true){ 
      if (active){
      canvas.addEventListener('mousedown',this.DrawLine)
      } else {
        canvas.removeEventListener('mousedown',this.DrawLine)
      }
    },
    // 划线
    DrawLine(e){ 
      let ox = 1 / this.scale * (e.pageX - canvas.offsetLeft - this.center.x),
          oy = 1 / this.scale * (e.pageY - canvas.offsetTop - this.center.y);
      console.log(e, canvas.offsetLeft, canvas.offsetTop, ox, oy)
      cxt.moveTo(ox, oy);
      canvas.onmousemove = event => { 
        let ox2 = 1 / this.scale * (event.pageX - canvas.offsetLeft - this.center.x),
            oy2 = 1 / this.scale * (event.pageY - canvas.offsetTop - this.center.y);
        cxt.lineTo(ox2, oy2);
        cxt.stroke();
      }
      canvas.onmouseup = () => { 
        canvas.onmousemove = null;
      } 
    },
    // 生成图片
    canvasToUrl() {
      // 在新的画布上绘制
      const sketch = document.getElementById("sketch");
      const sketchCxt = sketch.getContext("2d");
      let x = 0,
        y = 0;
      if (this.sketchWidth > this.sketchHeight) {
        // 图片横向
        x = 0;
        y = (this.scopeY - this.sketchHeight) / 2;
      } else {
        // 图片竖向
        x = (this.sketchWidth - this.sketchWidth) / 2;
        y = 0;
      }
      console.log(x, y, this.scale, this.sketchWidth, this.sketchHeight);
      let canvasData = cxt.getImageData(
        x,
        y,
        this.sketchWidth * this.scale,
        this.sketchHeight * this.scale
      );
      console.log("data", canvasData);
      // sketchCxt.putImageData(canvasData,  -this.sketchWidth / 2,  -this.sketchHeight / 2);
      sketchCxt.putImageData(canvasData, 0, 0);
      let url = sketch.toDataURL("image/png", 1);
      this.endImage = url;
    }
  }
};
</script>

<style lang="scss">
.canvas_container {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  display: inline-block;
}
.acts {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.act_btn {
  margin-right: 20px;
  border: 1px solid #ddd;
  width: 90px;
  text-align: center;
  border-radius: 5px;
  color: #333;
  padding: 10px 0;
  &:hover {
    color: white;
    background: chocolate;
    border: 1px solid chocolate;
    cursor: pointer;
  }
}
</style>