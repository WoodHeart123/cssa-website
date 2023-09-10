<template>
  <div class="page-end-mobile">
    <div class="join_cssa_section">
        <div class="title promo_title">申请加入CSSA</div>
        <div class="text promo_text">
          CSSA at UW Madison
          将在每年春季和秋季进行招新，敬请关注CSSA官方微信公众账号(CSSAatUWMadison)！
        </div>
      </div>
    <div class="foot">
      <div>
        <img class="logo_gif" src="../assets/home/Logo-02.gif" />
      </div>
      <div class="footnote">
        <a>© 威斯康辛大学中国学生学者联合会 2023</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "PageEndMobile",
  data() {
    return {
      back_img: [
        require("../assets/home/2020members.jpg"),
        require("../assets/home/choujiang.jpg"),
        require("../assets/home/chunwan.jpg"),
        require("../assets/home/yanhua.jpg"),
      ],
      img_index: 1,
      scrollHeader: false,
      count_index: [0, 2, 4, 6],
      arr1: [0, 1, 2, 3, 4, 5, 6, 7],
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
  methods: {
    increment() {
      let img = new Image();
      img.onload = () => {
        console.log("img loaded");
        this.img_index = (this.img_index + 1) % this.back_img.length;
        4;
      };
      img.src = this.back_img[(this.img_index + 1) % this.back_img.length];
    },
  },
  mounted() {
    this.timer = setInterval(this.increment, 10000);
  },
};
</script>



<style lang="postcss" scoped>
.page-end-mobile{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.foot {
  position: absolute;
  bottom: 10px;
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
  margin-bottom: 2vh;
  font-size: 30px;
  font-family: raleway, arial, sans-serif;
  line-height: 1.6;
  color: #2f2f2f;
  font-weight: 300;
  letter-spacing: .02em;
  text-transform: capitalize;
}
.join_cssa_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding-top:10vh;
  height: calc(40vh - 10px);
}
.promo_title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
}

.promo_text {
  display: flex;
  flex-direction: column;
  text-align: center;
  user-select: text;
}
.title {
  text-align: center;
  font-size: 36px;
  font-family: raleway, arial, sans-serif;
  color: #2f2f2f;
  letter-spacing: 0.02em;
  text-transform: capitalize;
}

.text {
  font-family: open sans, helvetica neue, helvetica, arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #777;
  font-weight: 400;
}

</style>