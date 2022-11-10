<template>
  <div class="sponsor-box">
    <div class="sponsor-title"><a>感谢CSSA赞助商</a></div>
    <div class="scroll-container">
      <van-swipe class="swipe-box" :autoplay="5000" indicator-color="black">
        <van-swipe-item class="sponsor-roll" v-for="(i, index) in count_index" v-bind:key="index">
          <div class="img-box" v-for="j in arr1" v-bind:key="j">
            <img class="sponsor-img" :src="sponsor_img[(i + j)  % sponsor_img.length]" />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>


<script>
export default {
  name: "Sponsor",
  data() {
    return {
      scrollHeader: false,
      count_index: [0, 7],
      arr1: [0, 1, 2, 3, 4, 5, 6, 7],
      sponsor_img: [
        require("../assets/sponsor/xdf.png"),
        require("../assets/sponsor/JNC.png"),
        require("../assets/sponsor/usbank.jpeg"),
        require("../assets/sponsor/acceptU.png"),
        require("../assets/sponsor/tianan.png"),
        require("../assets/sponsor/RICEPO.png"),
        require("../assets/sponsor/easymay.png"),
        require("../assets/sponsor/GC.png"),
        require("../assets/sponsor/unicareer.png")
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.sponsor-box {
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 100vw;
  margin-bottom: 10vh;
}
.scroll-container {
  display: flex;
  flex-direction: row;
  height: 20vh;
  width: 80vw;
  margin-left: 10vw;
}
.sponsor-img {
  width: 8vw;
  margin:0 1vw 0 1vw;
}
.sponsor-roll {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10vh;
  width: 80vw;

}
.img-box{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sponsor-title {
  padding-top:10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 8vh;
  margin-bottom: 2vh;
  font-size: 30px;
  font-family: raleway, arial, sans-serif;
  line-height: 1.6;
  color: #2f2f2f;
  font-weight: 300;
  letter-spacing: .02em;
  text-transform: capitalize;
}
.swipe-box{
  width:80vw;
}
</style>