<template>
  <div>
    <div @click="toggleShow">{{ show ? '关闭' : '打开' }}</div>
    <ImageViewer :imgUrl="imgList[0]"
                 :visible="show"
                 @closed="show = false" />
  </div>
</template>

<script>
import "@/assets/var.scss";
import ImageViewer from "./components/ImageViewer";
export default {
  name: "App",
  components: {
    ImageViewer,
  },
  data() {
    return {
      imgList: [
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1612138888,1794405442&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1588620919,359805583&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1652123795,1945063222&fm=26&gp=0.jpg",
      ],
      active: 0,
      show: false,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  padding-top: 60px;
}
</style>
