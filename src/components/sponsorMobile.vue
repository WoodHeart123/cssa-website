<template>
    <div class="sponsor-box">
      <div class="sponsor-title"><a>感谢CSSA赞助商</a></div>
      <div class="scroll-container">
        <van-swipe class="swipe-box" :autoplay="5000" indicator-color="black">
          <van-swipe-item
            class="sponsor-roll"
            v-for="(url, index) in sponsor_img"
            v-bind:key="index"
          >
          <div>
            <img
                class="sponsor-img"
                :src="sponsor_img[index]"
              />
          </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
</template>

<script>
export default {
  name: "sponsorMobile",
  data() {
    return {
      sponsor_img: [
        require("../assets/sponsor/xdf.png"),
        require("../assets/sponsor/JNC.png"),
        require("../assets/sponsor/usbank.jpg"),
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
.foot {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 30vh;
  padding: 10vh 0 10vh 0;
}
.logo_gif {
  height: 200px;
  width: 500px;
}
.footnote {
  padding-top: 2vh;
  font-size: 16px;
  line-height: 1.6;
  color: #777;
  font-weight: 400;
}
.sponsor-box{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sponsor-roll{
  width:100vw;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sponsor-image{
  width:50px !important;
  height: 50px !important;
  transform: scale(2);
}
.sponsor-title {
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

</style>