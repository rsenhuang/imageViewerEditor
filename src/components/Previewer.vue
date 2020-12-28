<template>
  <div class="canvas_container">
    <canvas id="canvas" width="500" height="500"></canvas>
    <div class="acts">
        <div class="act_btn">逆时针旋转</div>
        <div class="act_btn">顺时针旋转</div>
        <div class="act_btn">放大</div>
        <div class="act_btn">缩小</div>
        <div class="act_btn">裁剪</div>
        <div class="act_btn">涂鸦</div>
    </div>
  </div>
</template>

<script>
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
  mounted() {
    const c = document.getElementById("canvas");
    const cxt = c.getContext("2d");
    let image = new Image();
    image.src = this.imgs[0]
    cxt.drawImage(image, 0, 0);
  },
  methods: {
    handleRotate(direction = ''){
console.log('direction', direction)
    },
    handleScale(size = '') {
      console.log(size)
    },
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
}
}
</style>