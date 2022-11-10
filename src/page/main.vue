<template>
  <div class="main">
    <div class="header" v-bind:class="{ header_red: scrollHeader }">
      <div class="icon_col">
        <img v-show="!scrollHeader" src="../assets/home/cssalogo-red-sm.png" />
        <img v-show="scrollHeader" src="../assets/home/cssalogo-white-sm.png" />
      </div>
      <div class="menu_col">
        <div class="font-white selected">主页</div>
        <a href="http://www.cssaatuwmadison.com.cn/AboutCSSA" class="font-dark">关于cssa</a>
        <a href="http://www.cssaatuwmadison.com.cn/Member" class="font-dark">成员相册</a>
        <a href="http://www.cssaatuwmadison.com.cn/Contact" class="font-dark">联系我们</a>
      </div>
    </div>
    <div>
      <div class="swiper">
        <swiper></swiper>
      </div>
    </div>
    <div class="about_section">
      <div class="title"><a>关于CSSA</a></div>
      <div class="text" v-for="(pg, index) in about_cssa" v-bind:key="index">
        <div>&#8195;&#8195;{{ pg }}</div>
      </div>
      <div class="button_large">CSSA详细介绍</div>
    </div>
    <div class="act_section">
      <act-display></act-display>
    </div>
    <div class="member_title">CSSA主席团</div>
    <div class="member">
      <div
        class="member_container"
        v-for="(count, i) in count_col"
        v-bind:key="i"
      >
        <div v-for="(member, index) in member_arr" v-bind:key="index">
          <board-member
            :member="member"
            v-show="index < count && (i == 0 || index >= count_col[i - 1])"
          ></board-member>
        </div>
      </div>
    </div>
    <div class="join_cssa_section">
      <div class="title promo_title">申请加入CSSA</div>
      <div class="text promo_text">
        CSSA at UW Madison
        将在每年春季和秋季进行招新，敬请关注CSSA官方微信公众账号(CSSAatUWMadison)！
      </div>
    </div>
    <div class="sponsor_section">
      <sponsor></sponsor>
    </div>
    <page-end></page-end>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  components: {
    Swiper,
    ActDisplay,
    BoardMember,
    Sponsor,
    PageEnd,
  },
  data() {
    return {
      scrollHeader: false,
      about_cssa: [
        "CSSA是中国学生学者联合会，是由在海外的留学生自发成立的，如今在全球各地的高校中都不乏其身影的中国学生组织。仅在美国，超过百所高校的中国留学生成立了CSSA。 CSSA在全球发展中日渐成熟，为在美中国学生学者包含本科生、研究生、硕士生、博士生、访问学者以及教授等在内的华人群体提供生活服务，学术支持，以及社交平台。",
        "借着二十年以来的基础，CSSA是UW-Madison十分活跃也极具影响力的华人学生组织，致力于文化之间的交流和校园的多元化。一直以来以建立华人学生学者之间的交流为目标，同时也积极的作为对中华文化有兴趣的人的桥梁。 CSSA一直以来着重于推广中华文化和传统，例如每年最重要的春节晚会，秉持着免费对在校学生和人员开放的原则，准备了各式各样的节目，包含传统舞蹈，歌唱表演，脱口秀和其他精彩的表演。",
        "每年在 Memorial Union举办的春晚二十年来不只吸引了华人学生和华人家庭，也有越来越多美国当地的家庭出席甚至参与演出。",
        "这些活动不只为学生们带来了生活乐趣和归属感，在推广中华文化的同时也为麦迪逊带来了不一样的文化气息。当然这些成绩不是一个力量下的成果，而是集结了各个学生以及组织，还有很多人的一份心力。",
      ],
      member_arr: [
        {
          imageUrl: require("../assets/home/yang.jpg"),
          name: "杨天林",
          position: "现任主席",
        },
        {
          imageUrl: require("../assets/home/chu.jpg"),
          name: "楚芸蔚",
          positions: "外联部长",
        },
        {
          imageUrl: require("../assets/home/shen.jpg"),
          name: "沈格非",
          position: "多媒体部长",
        },
        {
          imageUrl: require("../assets/home/ma.jpg"),
          name:"马伊侬",
          position:"宣传部长",
        },
        {
          imageUrl: require("../assets/home/hou.jpg"),
          name:"侯映泽",
          position:"活动部长",
        },
        {
          imageUrl: require("../assets/home/su.jpg"),
          name:"苏浩涵",
          position:"研究生部长",
        },
        {
          imageUrl:require("../assets/home/sun.jpg"),
          name:"孙博彦",
          position:"技术部部长",
        }
      ],
      count_col: [3, 6, 9],
    };
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
    toAboutCSSA: function () {
      this.$router.push("AboutCSSA");
    },
    toContact: function () {
      this.$router.push("Contact");
    },
    toMember: function () {
      this.$router.push("Member");
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.timer = setInterval(this.increment, 5000);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
import Swiper from "../components/swiper.vue";
import ActDisplay from "../components/actDisplay.vue";
import BoardMember from "../components/boardMember.vue";
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
}
.header {
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  position: fixed;
  width: 80vw;
  height: 75px;
  flex-direction: row;
  padding: 0 10vw 0 10vw;
  -webkit-transition: all 3s ease;
  transition: all 0.5s ease;
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

.swiper {
  width: 100vw;
  height: 100vh;
}

.font-white {
  font-family: raleway, arial, sans-serif;
  font-weight: 500;
  color: #c9c9c9;
}

.font-white:hover {
  color: white;
  cursor: pointer;
}

.about_section {
  height: 90vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10vh 30vw 0 30vw;
}

.title {
  height: 10vh;
  padding-top: 10vh;
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

.button_large {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e74c3c;
  border-color: #e74c3c;
  color: #fff;
  font-size: 18px !important;
  font-weight: 400;
  margin-top: 80px;
  width: 200px;
  height: 80px;
}

.member {
  display: flex;
  width: 80vw;
  height: auto;
  margin-left: 10vw;
  flex-direction: column;
}

.act_section {
  margin-bottom: 20vh;
}

.member_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80vw;
  height: 80vh;
  justify-content: center;
  margin-bottom: 10vw;
}

.member_title {
  height: 30px;
  width: 80vw;
  margin-left: 14vw;
  margin-bottom: 50px;
  font-family: raleway, arial, sans-serif;
  line-height: 1.6;
  color: #2f2f2f;
  font-weight: 300;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  font-size: 30px;
}

.join_cssa_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40vh;
  width: 100vw;
  background-color: #f9f9f9;
}

.promo_title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2vh;
  height: 10vh;
}

.promo_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 8vh;
}
.selected {
  font-size: 15px;
  font-weight: 600;
}
</style>