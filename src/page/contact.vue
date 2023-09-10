<template>
  <div class="main">
    <div class="header" v-bind:class="{ header_scroll: scrollHeader }">
      <div class="icon_col">
        <img src="../assets/home/cssalogo-red-sm.png" />
      </div>
      <div class="menu_col">
        <a href="http://www.cssaatuwmadison.com.cn/" class="font-dark">主页</a>
        <a href="http://www.cssaatuwmadison.com.cn/AboutCSSA" class="font-dark">关于cssa</a>
        <a href="http://www.cssaatuwmadison.com.cn/Member" class="font-dark">成员相册</a>
        <div class="font-dark selected">联系我们</div>
      </div>
    </div>
    <div
      class="background_box"
      :style="{ 'background-image': 'url(' + backgroundUrl + ')' }"
    >
      <div class="page_title">联系我们</div>
    </div>
    <div class="contact-box">
      <div class="contact">-> 微信公众号: CSSAatUWMadison</div>
      <div class="contact">-> B站账户: CSSAATUWMADISON</div>
      <div class="contact">-> 新浪微博: @威斯康星大学UW-CSSA</div>
      <div class="contact">-> Youtube: CSSA At UW-Madison</div>
      <div class="contact">-> Instagram: Cssa_at-Uwmadison</div>
      <div class="contact">-> Facebook: CSSA At UW-Madison</div>
    </div>
    <div class="contact-box"> 
      <div class="contact">新生微信群</div>
      <div>{{year}}秋季新生群、家长群已建立，请添加下方学联小助手微信，并备注上自己的NetID，小助手会把你们拉进秋季新生群。家长也可以让小助手拉您进家长群，只需在加微信时备注上“家长”就可以了。</div>
      <img src="../assets/contact/xzs.jpg">
    </div>
    <div class="contact-box">
      <div class="contact">生活小助手小程序</div>
      <div>CSSA@UW-Madison生活小助手小程序已上线，内附“二手闲置”，“租房信息”等功能，扫码关注哦。</div>
      <img src="../assets/contact/xcx.jpg">
    </div>
    <div class="blank"></div>
    <sponsor></sponsor>
    <page-end></page-end>
  </div>
</template>

<script>
export default {
  name: "Contact",
    components: {
    Sponsor,
    PageEnd,
  },
  data() {
    return {
      backgroundUrl: require("../assets/contact/contact.jpg"),
      year: new Date().getFullYear(),
      scrollHeader:false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 100) {
        this.scrollHeader = true;
      } else {
        this.scrollHeader = false;
      }
    },
    toMain:function(){
      this.$router.push("/");
    },
    toAboutCSSA:function(){
      this.$router.push("AboutCSSA");
    },
    toMember:function(){
      this.$router.push("Member");
    }
  },
};
import Sponsor from "../components/sponser.vue";
import PageEnd from "../components/pageEnd.vue";
</script>

<style lang="postcss" scoped>
.main {
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  flex: 1;
  overflow-x: hidden;
}
.header {
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  position: fixed;
  width: 80vw;
  height: 75px;
  z-index:0;
  flex-direction: row;
  background:white;
  padding: 0 10vw 0 10vw;
  -webkit-transition: all 3s ease;
  transition: all 0.5s ease;
}
.header_scroll {
  height: 60px;
  border-bottom:1px solid #e9e9e9;
}
.header_red {
  height: 60px;
  background: #c5050c;
}
.icon_col {
  display: flex;
  width: 50vw;
  flex-direction: row;
  align-items: left;
}
.menu_col {
  display: flex;
  width: 30vw;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 13px;
  text-transform: uppercase;
}
.contact-box {
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin-left: 20vw;
  font-family: raleway, arial, sans-serif;
  line-height: 1.6;
  color: #2f2f2f;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  padding-bottom:10px;
  border-bottom:1px solid #e9e9e9;
  margin-bottom:5vh;
  align-items: center;
}
.background_box {
  margin-top: 75px;
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  min-height: 40vh;
  justify-content: center;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(17, 17, 17, 0.7);
  background-blend-mode: multiply;
  background-position: center;
  margin-bottom: 10vh;
}
.page_title {
  height: 7vh;
  width: 100vw;
  text-align: center;
  font-size: 30px;
  color: white;
}
.subtitle {
  height: 3vh;
  width: 100vw;
  text-align: center;
  font-size: 13px;
  color: #c9c9c9;
}
.contact {
  text-align: left;
  font-size: 30px;
  margin-bottom: 5px;
  width:60vw;
}
.font-dark {
  color: #4c4c4c;
}
.font-dark:hover {
  color: #2f2f2f;
  cursor: pointer;
}
.selected {
  font-size: 15px;
  font-weight: 600;
}
.blank {
  min-height: 20vh;
  min-width: 100vw;
  background-color: #f9f9f9;
}
</style>