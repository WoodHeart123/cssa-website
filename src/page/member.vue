<template>
  <div class="main">
    <div class="header" v-bind:class="{ header_scroll: scrollHeader }">
      <div class="icon_col">
        <img src="../assets/home/cssalogo-red-sm.png" />
      </div>
      <div class="menu_col">
        <a href="http://www.cssaatuwmadison.com.cn/" class="font-dark">主页</a>
        <a href="http://www.cssaatuwmadison.com.cn/AboutCSSA" class="font-dark">关于cssa</a>
        <div class="font-dark  selected">成员相册</div>
        <a href="http://www.cssaatuwmadison.com.cn/Contact" class="font-dark">联系我们</a>
      </div>
    </div>
    <div
      class="background_box"
      :style="{ 'background-image': 'url(' + backgroundUrl + ')' }"
    >
      <div class="page_title">联系我们</div>
    </div>
    <member-box v-for="(board,index) in boards" :key="index" :board="board"></member-box>
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
    MemberBox
  },
  data() {
    return {
      backgroundUrl: require("../assets/contact/contact.jpg"),
      year: new Date().getFullYear(),
      scrollHeader:false,
      boards:[
        {title:"主席团",text:["责任在肩，传承辉煌未来","运筹帷幄，引领崭新的未来","用开拓与进取，创造更多的可能","新的征程，我们的show time"]},
        {title:"外联部",text:["辨士之才，君子之风","谈判桌前，西装革履，挥洒自如","自企业处取赞助，于社团间架桥梁","专业、高效，而不至于此"]},
        {title:"行政部",text:["线下组织内部活动，线上编辑精美文宣","财务规划的清晰，亦或是深夜电台的温暖","兼收成与创新，于稳重求进"]},
        {title:"活动部",text:["恶魔湖的欢脱，非诚的甜蜜","一站到底的紧张，春晚的祝福","一切想感受的，有我们来策划、组织","努力与热枕，只为最后那一刻呈现"]},
        {title:"多媒体部",text:["光与影的交界，声音与色彩的中心","用不眠不休的夜晚，反复雕琢着细节","如山般累计的灵感，但取一勺饮之","CSSA的门面，我们力求精致完美"]},
        {title:"研究生部",text:["研以经世，究以纬国","怀揣着专注和热忱，助力学术和职业","为深造的莘莘学子，铺平现在与未来的道路","学术与生活，我们一起向上"]},
        {title:"技术部",text:["想它人之未想","为他人之未为"]},
      ]
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
    toContact:function(){
      this.$router.push("Contact");
    }
  },
};
import Sponsor from "../components/sponser.vue";
import PageEnd from "../components/pageEnd.vue";
import MemberBox from "../components/memberBox.vue";
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
  margin: 0 10vw 0 10vw;
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
.font-dark {
  color: #4c4c4c !important;
}
.font-dark:hover {
  color: #2f2f2f !important;
  cursor: pointer;
}
.selected {
  font-size: 15px;
  font-weight: 600;
}
</style>