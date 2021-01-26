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
        <!-- 阴影 -->
        <div id="cut_left"></div>
        <div id="cut_right"></div>
        <div id="cut_top"></div>
        <div id="cut_bottom"></div>
        <!-- 可缩放边 -->
        <div id="border_left"></div>
        <div id="border_right"></div>
        <div id="border_top"></div>
        <div id="border_bottom"></div>
        <!-- 缩放边顶角 -->
        <div id="border_lt"></div>
        <div id="border_rt"></div>
        <div id="border_lb"></div>
        <div id="border_rb"></div>
      </div>
    </div>
    <canvas id="sketch"
            :width="sketchWidth"
            :height="sketchHeight"
            style="border: 1px dashed #ddd;"></canvas>
    <div class="acts">
      <div class="act_btn"
           @click="handleRotate(false)">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-nishizhenxuanzhuan" />
        </svg>
        逆时针旋转
      </div>
      <div class="act_btn"
           @click="handleRotate(true)">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-shunshizhenxuanzhuan" />
        </svg>
        顺时针旋转
      </div>
      <div class="act_btn"
           @click="handleScale(true)">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-fangda" />
        </svg>
        放大
      </div>
      <div class="act_btn"
           @click="handleScale(false)">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-zoomOut" />
        </svg>
        缩小
      </div>
      <div class="act_btn"
           @click="toggleCut">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-caijian1" />
        </svg>
        裁剪
      </div>
      <div class="act_btn"
           @click="toggleGraffiti">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-baocun" />
        </svg>
        涂鸦
      </div>
      <div class="act_btn"
           @click="reset">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-chehui" />
        </svg>
        还原
      </div>
      <div class="act_btn"
           @click="canvasToUrl">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-baocun" />
        </svg>
        保存
      </div>
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
      default: "",
    },
  },
  data() {
    return {
      center: {
        x: 0,
        y: 0,
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
      originSize: 50, // 裁剪区默认大小（1/2宽高）
      initCut: false, // 是否初始化裁剪
      cutStartX: 0, // 裁剪开始坐标x
      cutStartY: 0, // 裁剪开始左边y
      cutWidth: 100, // 裁剪区宽
      cutHeight: 100, // 裁剪区高
      startCut: false, // 选择裁剪区
      startDom: { x: 0, y: 0 }, // 拖拽起点
      borderWidth: 10, // 可伸缩宽度
    };
  },
  mounted() {
    document.onmouseup = () => (document.onmousemove = null);
    canvas = document.getElementById("canvas");
    cxt = canvas.getContext("2d");
    let image = new Image();
    image.onload = () => {
      console.log("loaded");
    };
    image.onerror = (err) => {
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
          y: 0,
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
        width: image.width,
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
      this.cutStartX = -this.cutWidth / 2;
      this.cutStartY = -this.cutHeight / 2;
      this.changeCutArea(false);
      // 重置宽高
      this.sketchWidth = 0;
      this.sketchHeight = 0;
      cxt.lineWidth = 1;
      this.center = {
        x: 0,
        y: 0,
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
    // 标识中心
    showCenter() {
      cxt.beginPath();
      cxt.fillStyle = "blue";
      cxt.rect(-5, -5, 10, 10);
      cxt.fill();
      cxt.closePath();
    },
    // 启动裁剪
    toggleCut() {
      if (!this.canCut) {
        this.canCut = true;
        this.cutStartX = -this.cutWidth / 2;
        this.cutStartY = -this.cutHeight / 2;
        this.readyMoveCutArea();
      }
    },
    // 启动裁剪框移动
    readyMoveCutArea() {
      let cutContent = document.getElementById("cut_content");
      console.log("===", cutContent.onmousedown);
      if (cutContent.onmousedown) {
        cutContent.onmousedown = null;
        cutContent.onmouseup = () => {
          document.onmousemove = null;
          cutContent.onmousedown = (e2) => {
            document.onmousemove = (event) => {
              this.moveCutArea(event, e2);
            };
          };
        };
      } else {
        // 初始化
        this.moveCutArea();
        cutContent.onmousedown = (e) => {
          if (!this.initCut) {
            this.startDom = { x: e.x, y: e.y };
          }
          this.initCut = true;
          document.onmousemove = (event) => {
            event.preventDefault();
            this.moveCutArea(event, e);
          };
          cutContent.onmouseup = () => {
            document.onmousemove = null;
          };
        };
      }
    },
    // 拖拽裁剪框
    moveCutArea(event = { x: 0, y: 0 }, startDom = this.startDom) {
      let dx = event.x - startDom.x,
        dy = event.y - startDom.y;
      // console.log("移动", event.type, dx, dy, startDom.x, startDom.y);
      let cutStartX = -this.cutWidth / 2 + dx,
        cutStartY = -this.cutHeight / 2 + dy,
        // 左上角坐标的移动范围(minX, minY)到(maxX, maxY)
        maxX = this.sketchWidth / 2 - this.cutWidth - this.borderWidth,
        maxY = this.sketchHeight / 2 - this.cutHeight - this.borderWidth,
        minX = -this.sketchWidth / 2 + this.borderWidth,
        minY = -this.sketchHeight / 2 + this.borderWidth;
      if (maxX < cutStartX) {
        cutStartX = maxX;
      }
      if (minX > cutStartX) {
        cutStartX = minX;
      }
      if (maxY < cutStartY) {
        cutStartY = maxY;
      }
      if (minY > cutStartY) {
        cutStartY = minY;
      }
      this.cutStartX = cutStartX;
      this.cutStartY = cutStartY;
      this.changeCutArea();
    },
    changeCutArea() {
      let cutContent = document.getElementById("cut_content");
      console.log("center", this.cutStartX, this.cutStartY);
      this.setStyle(cutContent, {
        border: "1px solid white",
        width: this.cutWidth + 2 * this.borderWidth + "px",
        height: this.cutHeight + 2 * this.borderWidth + "px",
        top:
          Math.abs(this.sketchHeight / 2 + this.cutStartY) -
          this.borderWidth -
          1 +
          "px",
        left:
          Math.abs(this.cutStartX + this.sketchWidth / 2) -
          this.borderWidth -
          1 +
          "px",
        cursor: "move",
      });
      this.setCutArea();
    },
    // border原点为左上顶点、canvas原点为图形中心
    setBorder() {
      let borderLeft = document.getElementById("border_left"),
        borderRight = document.getElementById("border_right"),
        borderTop = document.getElementById("border_top"),
        borderBottom = document.getElementById("border_bottom"),
        borderLt = document.getElementById("border_lt"),
        borderRt = document.getElementById("border_rt"),
        borderLb = document.getElementById("border_lb"),
        borderRb = document.getElementById("border_rb");
      this.setStyle(borderLeft, {
        width: this.borderWidth + "px",
        height: this.cutHeight + "px",
        // background: "rgba(0,0,255, 0.8)",
        top: this.cutStartY + this.sketchHeight / 2 + "px",
        left: this.cutStartX + this.sketchWidth / 2 - this.borderWidth + "px",
        cursor: "w-resize",
      });
      this.setStyle(borderRight, {
        width: this.borderWidth + "px",
        height: this.cutHeight + "px",
        // background: "rgba(0,0,255, 0.8)",
        top: this.cutStartY + this.sketchHeight / 2 + "px",
        left: this.cutStartX + this.cutWidth + this.sketchWidth / 2 + "px",
        cursor: "e-resize",
      });
      this.setStyle(borderTop, {
        width: this.cutWidth + "px",
        height: this.borderWidth + "px",
        // background: "rgba(255,0,0, 0.8)",
        top: this.cutStartY + this.sketchHeight / 2 - this.borderWidth + "px",
        left: this.cutStartX + this.sketchWidth / 2 + "px",
        cursor: "n-resize",
      });
      this.setStyle(borderBottom, {
        width: this.cutWidth + "px",
        height: this.borderWidth + "px",
        // background: "rgba(255,0,0, 0.8)",
        top: this.cutStartY + this.sketchHeight / 2 + this.cutHeight + "px",
        left: this.cutStartX + this.sketchWidth / 2 + "px",
        cursor: "s-resize",
      });
      // 设置四顶角
      this.setStyle(borderLt, {
        width: this.borderWidth + "px",
        height: this.borderWidth + "px",
        // background: "rgba(0,255,0, 0.8)",
        top: this.cutStartY + this.sketchHeight / 2 - this.borderWidth + "px",
        left: this.cutStartX + this.sketchWidth / 2 - this.borderWidth + "px",
        cursor: "nw-resize",
      });
      this.setStyle(borderRt, {
        width: this.borderWidth + "px",
        height: this.borderWidth + "px",
        // background: "rgba(0,255,0, 0.8)",
        top: this.cutStartY + this.sketchHeight / 2 - this.borderWidth + "px",
        left: this.cutStartX + this.cutWidth + this.sketchWidth / 2 + "px",
        cursor: "ne-resize",
      });
      this.setStyle(borderLb, {
        width: this.borderWidth + "px",
        height: this.borderWidth + "px",
        // background: "rgba(0,255,0,  0.8)",
        top: this.cutStartY + this.sketchHeight / 2 + this.cutHeight + "px",
        left: this.cutStartX + this.sketchWidth / 2 - this.borderWidth + "px",
        cursor: "sw-resize",
      });
      this.setStyle(borderRb, {
        width: this.borderWidth + "px",
        height: this.borderWidth + "px",
        // background: "rgba(0,255, 0, 0.8)",
        top: this.cutStartY + this.sketchHeight / 2 + this.cutHeight + "px",
        left: this.cutStartX + this.cutWidth + this.sketchWidth / 2 + "px",
        cursor: "se-resize",
      });
      borderLeft.onmousedown = (se) => this.dragBorder(se, "bl");
      borderLeft.onmouseup = () => (document.onmousemove = null);
      borderRight.onmousedown = (se) => this.dragBorder(se, "br");
      borderRight.onmouseup = () => (document.onmousemove = null);
      borderTop.onmousedown = (se) => this.dragBorder(se, "bt");
      borderTop.onmouseup = () => (document.onmousemove = null);
      borderBottom.onmousedown = (se) => this.dragBorder(se, "bb");
      borderBottom.onmouseup = () => (document.onmousemove = null);
      borderLt.onmousedown = (se) => this.dragBorder(se, "lt");
      borderLt.onmouseup = () => (document.onmousemove = null);
      borderRt.onmousedown = (se) => this.dragBorder(se, "rt");
      borderRt.onmouseup = () => (document.onmousemove = null);
      borderLb.onmousedown = (se) => this.dragBorder(se, "lb");
      borderLb.onmouseup = () => (document.onmousemove = null);
      borderRb.onmousedown = (se) => this.dragBorder(se, "rb");
      borderRb.onmouseup = () => (document.onmousemove = null);
    },
    // 拖拽边界
    dragBorder(se, dom) {
      let sx = this.cutStartX,
        sy = this.cutStartY,
        sw = this.cutWidth,
        sh = this.cutHeight,
        maxX = this.sketchWidth / 2 - this.borderWidth,
        maxY = this.sketchHeight / 2 - this.borderWidth,
        minX = -this.sketchWidth / 2 + this.borderWidth,
        minY = -this.sketchHeight / 2 + this.borderWidth;
      switch (dom) {
        case "bl":
          document.onmousemove = (ee) => {
            let moveDis = ee?.x - se?.x;
            let startX = sx + moveDis;
            if (startX >= minX && startX < sx + sw) {
              this.cutStartX = sx + moveDis;
              this.cutWidth = sw - moveDis;
            } else {
              return false;
            }
            this.changeCutArea();
          };
          break;
        case "br":
          document.onmousemove = (ee) => {
            let moveDis = ee?.x - se?.x;
            if (sx + sw + moveDis <= maxX && sw > -moveDis) {
              this.cutWidth = sw + moveDis;
            } else {
              return false;
            }
            this.changeCutArea();
          };
          break;
        case "bt":
          document.onmousemove = (ee) => {
            let moveDis = ee?.y - se?.y;
            let startY = sy + moveDis;
            if (startY < sy + sh && startY >= minY) {
              this.cutStartY = sy + moveDis;
              this.cutHeight = sh - moveDis;
            } else {
              return false;
            }
            this.changeCutArea();
          };
          break;
        case "bb":
          document.onmousemove = (ee) => {
            let moveDis = ee?.y - se?.y;
            if (sy + sh + moveDis <= maxY && sh > -moveDis) {
              this.cutHeight = sh + moveDis;
            } else {
              return false;
            }
            this.changeCutArea();
          };
          break;

        case "lt":
          document.onmousemove = (ee) => {
            let moveDis = ee?.x - se?.x;
            if (
              sx + moveDis >= minX &&
              sy + moveDis >= minY &&
              moveDis < sw &&
              moveDis < sh
            ) {
              this.cutWidth = sw - moveDis;
              this.cutHeight = sh - moveDis;
              this.cutStartY = sy + moveDis;
              this.cutStartX = sx + moveDis;
            } else {
              return false;
            }
            this.changeCutArea();
          };
          break;
        case "rt":
          document.onmousemove = (ee) => {
            let moveDis = ee?.x - se?.x;
            if (
              sx + sw + moveDis <= maxX &&
              sy - moveDis >= minY &&
              sw > -moveDis &&
              moveDis < sh
            ) {
              this.cutWidth = sw + moveDis;
              this.cutHeight = sh + moveDis;
              this.cutStartY = sy - moveDis;
            } else {
              return false;
            }
            this.changeCutArea();
          };
          break;
        case "lb":
          document.onmousemove = (ee) => {
            let moveDis = ee?.y - se?.y;
            if (
              sy + sh + moveDis <= maxY &&
              sx - moveDis >= minX &&
              sh > -moveDis &&
              moveDis < sw
            ) {
              this.cutWidth = sw + moveDis;
              this.cutHeight = sh + moveDis;
              this.cutStartX = sx - moveDis;
            } else {
              return false;
            }
            this.changeCutArea();
          };
          break;
        case "rb":
          document.onmousemove = (ee) => {
            let moveDis = ee?.x - se?.x;
            if (
              sx + sw + moveDis <= maxX &&
              sy + sh + moveDis <= maxY &&
              sw > -moveDis &&
              sh > -moveDis
            ) {
              this.cutWidth = sw + moveDis;
              this.cutHeight = sh + moveDis;
            } else {
              return false;
            }
            this.changeCutArea();
          };
          break;
        default:
          break;
      }
    },
    // 裁剪范围
    setCutArea() {
      this.setBorder();
      let cutLeft = document.getElementById("cut_left"),
        cutRight = document.getElementById("cut_right"),
        cutTop = document.getElementById("cut_top"),
        cutBottom = document.getElementById("cut_bottom");
      cutLeft.style.background = "rgba(0,0,0,0.3)";
      cutRight.style.background = "rgba(0,0,0,0.3)";
      cutTop.style.background = "rgba(0,0,0,0.3)";
      cutBottom.style.background = "rgba(0,0,0,0.3)";
      // cutLeft.innerHTML = `<span style="color: white">left</span>`;
      // cutRight.innerHTML = `<span style="color: white">cutRight</span>`;
      // cutTop.innerHTML = `<span style="color: white">cutTop</span>`;
      // cutBottom.innerHTML = `<span style="color: white">cutBottom</span>`;
      this.setStyle(cutLeft, {
        width:
          Math.abs(this.cutStartX + this.sketchWidth / 2) -
          this.borderWidth +
          "px",
        height: this.sketchHeight + "px",
        top: 0,
      });
      this.setStyle(cutRight, {
        width:
          Math.abs(this.sketchWidth / 2 - (this.cutStartX + this.cutWidth)) -
          this.borderWidth +
          "px",
        height: this.sketchHeight + "px",
        top: 0,
        right: 0,
      });
      this.setStyle(cutTop, {
        width: this.cutWidth + 2 * this.borderWidth + "px",
        height:
          Math.abs(this.sketchHeight / 2 + this.cutStartY) -
          this.borderWidth +
          "px",
        top: 0,
        left:
          Math.abs(this.cutStartX + this.sketchWidth / 2) -
          this.borderWidth +
          "px",
      });
      this.setStyle(cutBottom, {
        width: this.cutWidth + 2 * this.borderWidth + "px",
        height:
          this.sketchHeight -
          Math.abs(this.sketchHeight / 2 + this.cutStartY) -
          this.cutHeight -
          this.borderWidth +
          "px",
        top:
          Math.abs(this.sketchHeight / 2 + this.cutStartY) +
          this.cutHeight +
          this.borderWidth +
          "px",
        left:
          Math.abs(this.cutStartX + this.sketchWidth / 2) -
          this.borderWidth +
          "px",
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
      canvas.onmousemove = (event) => {
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
        y = 0,
        width = 0,
        height = 0;
      if (this.mode === "") {
        x = this.cutStartX - this.borderWidth;
        y = this.cutStartY - this.borderWidth;
        width = this.cutWidth + 2 * this.borderWidth;
        height = this.cutHeight + 2 * this.borderWidth;
      } else {
        if (this.sketchWidth > this.sketchHeight) {
          // 图片横向
          x = 0;
          y = (this.scopeY - this.sketchHeight) / 2;
        } else {
          // 图片竖向
          x = (this.sketchWidth - this.sketchWidth) / 2;
          y = 0;
        }
        width = this.sketchWidth * this.scale;
        height = this.sketchHeight * this.scale;
      }
      console.log(x, y, this.scale, this.sketchWidth, this.sketchHeight);
      let canvasData = cxt.getImageData(x, y, width, height);
      console.log("data", canvasData);
      // sketchCxt.putImageData(canvasData,  -this.sketchWidth / 2,  -this.sketchHeight / 2);
      sketchCxt.putImageData(canvasData, 0, 0);
      let url = sketch.toDataURL("image/png", 1);
      this.endImage = url;
    },
  },
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
      #cut_bottom,
      #border_left,
      #border_right,
      #border_top,
      #border_bottom,
      #border_lt,
      #border_rt,
      #border_lb,
      #border_rb {
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
  width: 150px;
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