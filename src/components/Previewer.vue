<template>
  <div class="canvas_container">
    <div class="img_container"
         :style="{width: minWidth + 'px', height: minWidth + 'px'}">
      <canvas id="canvas"
              :width="scopeX"
              :height="scopeY"
              style="border: 1px dashed #ddd;"></canvas>
      <div id="cut_area"
           v-show="canCut"
           :style="{width: sketchWidth + 'px', height: sketchHeight + 'px'}">
        <div id="cut_content"></div>
        <div id="cut_left"></div>
        <div id="cut_right"></div>
        <div id="cut_top"></div>
        <div id="cut_bottom"></div>
      </div>
    </div>
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
      <div class="act_btn"
           @click="toggleCut">裁剪</div>
      <div class="act_btn"
           @click="toggleGraffiti">涂鸦</div>
      <div class="act_btn"
           @click="reset">还原</div>
      <div class="act_btn"
           @click="canvasToUrl">保存</div>
    </div>
    <div>
      <div>效果图</div>
      <img v-if="endImage"
           :src="endImage"
           alt
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
      default: ""
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
      minWidth: 1000, // 容器宽高
      scopeX: 1000, // 图片大小（宽）
      scopeY: 1000, // 图片大小（高）
      canCut: false, // 是否启用裁剪
      cutStartX: 0, // 裁剪开始坐标x
      cutStartY: 0, // 裁剪开始左边y
      cutWidth: 100, // 裁剪区宽
      cutHeight: 100, // 裁剪区高
      startCut: false // 选择裁剪区
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
      cxt.lineWidth = 1;
      this.$nextTick(() => {
        // 动态修改canvas宽高会导致canvas重新渲染
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
    // x: x轴，y：y轴 reset: 重置原点
    moveCenter(x = 0, y = 0, reset = false) {
      console.log("原中心点", this.center.x, this.center.y);
      if (reset) {
        this.center = {
          x: 0,
          y: 0
        };
        // cxt.translate(-x, -y);
      }
      cxt.translate(x, y);
      this.center.x += x;
      this.center.y += y;
      console.log("end", this.center.x, this.center.y);
    },
    // 计算宽高
    computedSize(image = {}) {
      let long = image.width > image.height ? image.width : image.height;
      let short = image.width > image.height ? image.height : image.width;
      if (this.direction % 2) {
        this.scopeX = long;
        this.scopeY = short;
      } else {
        this.scopeX = short;
        this.scopeY = long;
      }
      this.minWidth = long;
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
        this.moveCenter(-this.scopeX / 2, -this.scopeY / 2);
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
          this.moveCenter(this.scopeX / 2, this.scopeY / 2);
          cxt.rotate(((5 - this.direction) * -90 * Math.PI) / 180);
          cxt.drawImage(
            image,
            -img.width / 2,
            -img.height / 2,
            img.width,
            img.height
          );
          this.showCenter();
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
          this.showCenter();
        });
      });
    },
    reset() {
      this.canCut = false;
      this.cutStartX = -50;
      this.cutStartY = -50;
      this.changeCutArea(false);
      // 重置宽高
      this.sketchWidth = 0;
      this.sketchHeight = 0;
      cxt.lineWidth = 1;
      this.center = {
        x: 0,
        y: 0
      };
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
          /*
           *  重点注意：动态修改canvas宽高会导致canvas重新渲染，原点回归左上顶角
           */
          // 缩放复原
          cxt.scale(1 / this.scale, 1 / this.scale);
          this.scale = 1;
          // 旋转复原
          if (this.direction % 2) {
            // if (this.direction === 1){
            //   this.moveCenter(image.width / 2 , image.height / 2, true);
            // } else{
            cxt.rotate(((5 - this.direction) * 90 * Math.PI) / 180);
            // }
          } else {
            this.moveCenter(image.width / 2, image.height / 2, true);
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
          this.showCenter();
        });
      });
    },
    // 启动裁剪
    toggleCut() {
      if (!this.canCut) {
        this.canCut = true;
        this.cutStartX = -50;
        this.cutStartY = -50;
        this.changeCutArea();
        canvas.addEventListener("mouseover", e => {
          let ox =
              (1 / this.scale) * (e.pageX - canvas.offsetLeft - this.center.x),
            oy =
              (1 / this.scale) * (e.pageY - canvas.offsetTop - this.center.y);
          console.log(ox, oy);
        });
      }
    },
    // 标识中心
    showCenter() {
      cxt.beginPath();
      cxt.fillStyle = "blue";
      cxt.rect(-5, -5, 10, 10);
      cxt.fill();
      cxt.closePath();
    },
    changeCutArea(movable = true) {
      let cutContent = document.getElementById("cut_content");
      this.setStyle(cutContent, {
        border: "1px solid white",
        width: this.cutWidth + "px",
        height: this.cutHeight + "px",
        top: Math.abs(this.sketchHeight / 2 + this.cutStartY) - 1 + "px",
        left: Math.abs(this.cutStartX + this.sketchWidth / 2) - 1 + "px",
        cursor: "move"
      });
      // cutContent.addEventListener("mousedown", this.readyMoveCutArea); 
      // cutContent.addEventListener('mouseup', () => {
      //   cutContent.removeEventListener('mousedown', this.readyMoveCutArea);
      // })
      if (movable && !cutContent.onmousedown) cutContent.onmousedown = this.readyMoveCutArea
      this.setCutArea()
    },
    // 启动裁剪框移动
    readyMoveCutArea(e){
      let cutContent = document.getElementById("cut_content");  
      cutContent.onmousemove = event => {
        this.moveCutArea(event, e); 
      }
      cutContent.onmouseup = () => {
        cutContent.onmousedown = null;
        cutContent.onmousemove = null;
      } 
    },
    // 拖拽裁剪框
    moveCutArea(event, startDom = {x: 0, y: 0}){
      // return () => {
      // let cutContent = document.getElementById("cut_content");
        let dx = event.x - startDom.x,
          dy = event.y - startDom.y;
        console.log('移动', event.type, dx, dy, startDom.x, startDom.y);
        this.cutStartX += dx;
        this.cutStartY += dy; 
        this.changeCutArea();
      // }
    },
    // 裁剪范围
    setCutArea() {
      let cutLeft = document.getElementById("cut_left"),
        cutRight = document.getElementById("cut_right"),
        cutTop = document.getElementById("cut_top"),
        cutBottom = document.getElementById("cut_bottom");
      cutLeft.style.background = "rgba(0,0,0,0.3)";
      cutRight.style.background = "rgba(0,0,0,0.3)";
      cutTop.style.background = "rgba(0,0,0,0.3)";
      cutBottom.style.background = "rgba(0,0,0,0.3)";
      cutLeft.innerHTML = `<span style="color: white">left</span>`
      cutRight.innerHTML = `<span style="color: white">cutRight</span>`
      cutTop.innerHTML = `<span style="color: white">cutTop</span>`
      cutBottom.innerHTML = `<span style="color: white">cutBottom</span>`
      this.setStyle(cutLeft, {
        width: Math.abs(this.cutStartX + this.sketchWidth / 2) + "px",
        height: this.sketchHeight + "px",
        top: 0
      });
      this.setStyle(cutRight, {
        width:
          Math.abs(this.sketchWidth / 2 - (this.cutStartX + this.cutWidth)) +
          "px",
        height: this.sketchHeight + "px",
        top: 0,
        right: 0
      });
      this.setStyle(cutTop, {
        width: this.cutWidth + "px",
        height: Math.abs(this.sketchHeight / 2 + this.cutStartY) + "px",
        top: 0,
        left: Math.abs(this.cutStartX + this.sketchWidth / 2) + "px"
      });
      this.setStyle(cutBottom, {
        width: this.cutWidth + "px",
        height: (this.sketchHeight - Math.abs(this.sketchHeight / 2 + this.cutStartY) - this.cutHeight) + "px",
        top:
          Math.abs(this.sketchHeight / 2 + this.cutStartY) +
          this.cutHeight +
          "px",
        left: Math.abs(this.cutStartX + this.sketchWidth / 2) + "px"
      });
    },
    // 设置样式
    setStyle(dom, css) {
      for (let prop in css) {
        dom.style[prop] = css[prop];
      }
    },
    // 启动涂鸦
    toggleGraffiti(active = true) {
      if (active) {
        canvas.addEventListener("mousedown", this.DrawLine);
      } else {
        canvas.removeEventListener("mousedown", this.DrawLine);
      }
    },
    // 划线
    DrawLine(e) {
      let ox = (1 / this.scale) * (e.pageX - canvas.offsetLeft - this.center.x),
        oy = (1 / this.scale) * (e.pageY - canvas.offsetTop - this.center.y);
      cxt.moveTo(ox, oy);
      canvas.onmousemove = event => {
        let ox2 =
            (1 / this.scale) *
            (event.pageX - canvas.offsetLeft - this.center.x),
          oy2 =
            (1 / this.scale) * (event.pageY - canvas.offsetTop - this.center.y);
        cxt.lineTo(ox2, oy2);
        cxt.stroke();
      };
      canvas.onmouseup = () => {
        canvas.onmousemove = null;
      };
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
  position: relative;
  .img_container {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    #cut_area {
      position: absolute;
      z-index: 100;
      #cut_content,
      #cut_left,
      #cut_right,
      #cut_top,
      #cut_bottom {
        position: absolute;
      }
    }
  }
  #sketch {
    display: inline;
  }
}
.acts {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 600px;
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