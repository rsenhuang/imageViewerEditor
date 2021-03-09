<template>
  <div>
    <div @click="toggleShow">{{ show ? '关闭' : '打开' }}</div>
    <ImageViewer :imgUrl="imgList[0]"
                 :visible="show"
                 :saving="saving"
                 @closed="show = false"
                 @save="handleSave" />
  </div>
</template>

<script>
// import ImageViewer from "~/ImageViewer";
import four from "./assets/7.jpg";
export default {
  name: "App",
  // components: {
  //   ImageViewer,
  // },
  data() {
    return {
      imgList: [four],
      active: 0,
      show: true,
      saving: false,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    handleSave() {
      this.saving = true;
      setTimeout(() => {
        this.saving = false;
      }, 2000);
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
