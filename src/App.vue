<template>
  <div>
    <!-- <div class="img_container">
      <div v-for="(url, index) in imgList" :key="index">
        <img v-if="index=== active" :src="url" />
      </div>
      <div id="image"></div>
    </div>-->
    <ImageEditor :imgUrl="imgList[0]" />
  </div>
</template>

<script>
import "@/assets/font.js";
import "viewerjs/dist/viewer.css";
// import Viewer from "viewerjs";
import ImageEditor from "@/components/ImageEditor";
export default {
  name: "App",
  components: {
    ImageEditor
  },
  data() {
    return {
      imgList: [
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1612138888,1794405442&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1588620919,359805583&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1652123795,1945063222&fm=26&gp=0.jpg"
      ],
      active: 0
    };
  },
  mounted() {
    // const viewer = new Viewer(document.getElementById("image"), {
    //   inline: true,
    //   viewed() {
    //     viewer.zoomTo(1);
    //   }
    // });
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.img_container {
  display: inline-block;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 500px;
  vertical-align: top;
  img {
    width: 500px;
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
