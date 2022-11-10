<template>
  <div class="main">
    <div class="header" v-bind:class="{ header_scroll: scrollHeader }">
      <div class="icon_col">
        <img src="../assets/home/cssalogo-red-sm.png" />
      </div>
      <div class="menu_col">
        <a href="http://www.cssaatuwmadison.com.cn/" class="font-dark">主页</a>
        <div class="font-dark selected">关于cssa</div>
        <a href="http://www.cssaatuwmadison.com.cn/Member" class="font-dark">成员相册</a>
        <a href="http://www.cssaatuwmadison.com.cn/Contact" class="font-dark">联系我们</a>
      </div>
    </div>
    <div
      class="background_box"
      :style="{ 'background-image': 'url(' + backgroundUrl + ')' }"
    >
      <div class="page_title">关于学联</div>
      <div class="subtitle">一封端庄的自我介绍，来自CSSA</div>
    </div>
    <div class="box">
      <div
        class="paragraph"
        v-for="(text, index) in about_cssa"
        v-bind:key="index"
      >
        <a>{{ text }}</a>
      </div>
    </div>
    <div class="box">
      <div class="title">学校介绍</div>
      <img class="icon" src="../assets/about/badger.jpg" />
      <div class="paragraph">
        <strong>威斯康辛麦迪逊大学(UW-Madison)</strong
        >是威斯康辛大学系统的旗帜性学校，建于1848年，是一所历史悠久，享有盛名的美国研究型公立高等学府，它经常被视为公立的常青藤名校之一，
        按美国全国研究会（National Research
        Council）的研究结果，威斯康辛大学有70个科目排在全美前十名。
      </div>
      <div class="paragraph">
        我校在各个学科和领域均享有声誉，产生了21位诺贝尔奖获得者，12位美国国家科学奖章获得者，还拥有87位美国国家科学院院士，26位美国国家工程院院士，61位美国艺术与科学院院士，8位美国国家医学院院士。
      </div>
    </div>
    <div class="box">
      <div class="paragraph">初来乍到，捏着发烫的offer，</div>
      <div class="paragraph">是否对这个崭新的环境措手不及？</div>
      <div class="paragraph">对于未来四年的种种规划，是否感到有点迷茫呢。</div>
      <div class="paragraph">但在Madison校园里，有一个庞大的队伍</div>
      <div class="paragraph">时刻在你身边给你温暖，给你带来家的感觉，</div>
      <div class="paragraph">他们就是：</div>
      <div class="paragraph center no-margin">
        <strong>威斯康辛麦迪逊中国学生学者联合会</strong>
      </div>
      <div class="paragraph center no-margin">
        <strong>Chinese Student and Scholars Association</strong>
      </div>
      <div class="paragraph center no-margin"><strong>(简称CSSA)</strong></div>
      <img class="icon" src="../assets/about/cssa.jpg" />
      <div class="paragraph center">
        <strong
          >威斯康辛大学麦迪逊分校中国学生学者联合会（CSSA at
          UW-Madison）</strong
        >作为麦迪逊本地最大的非盈利华人学生组织，服务麦屯华人是一直以来的使命。我们作为学联成员，
        所做的一切都应以服务麦屯华人为宗旨。同时，我们有义务帮助并团结本地包括本科生、研究生、硕士生、博士生、访问学者以及教授等在内的华人群体。
      </div>
    </div>
    <div class="box">
      <div class="title">专业地位：</div>
      <div class="paragraph center">
        中华人民共和国驻芝加哥总领事馆（Consulate-General of the PRC in
        Chicago）与威斯康辛大学麦迪逊分校中国学生学者联合会（CSSA at
        UW-Madison）协同举办多种活动，例如洪磊总领事在威斯康辛大学麦迪逊分校发表重要演讲，广东省艺术团在麦迪逊的春节巡演。
        洪磊总领事也对CSSA举办的活动提供了大力支持。另外，CSSA为麦迪逊华人提供了官方信息发布平台，以及为华人学生学者在紧急特殊情况下与提供了与大使馆的联系渠道。
      </div>
      <img src="../assets/about/honglei.jpg" />
    </div>
    <div class="box">
      <div class="title">现今规模：</div>
      <div class="paragraph center">
        CSSA at UW-Madison成员约100人，每学期招新，我们分为六个部门：<strong
          >活动部、外联部、行政部、多媒体部、研究生部和技术部。</strong
        >
      </div>
      <div class="paragraph center">
        <strong>活动部：</strong>安排策划所有对外活动；
      </div>
      <div class="paragraph center">
        <strong>行政部：</strong
        >对内管理一切行政事务，策划内部活动，管理学联资金，负责文宣撰写；
      </div>
      <div class="paragraph center">
        <strong>外联部：</strong>对外联系社团和赞助商家，申请学校Funding；
      </div>
      <div class="paragraph center">
        <strong>多媒体部：</strong>海报设计，视频拍摄；
      </div>
      <div class="paragraph center">
        <strong>研究生部：</strong
        >职业发展活动，求职经验分享，举办研究生部特色活动；
      </div>
      <div class="paragraph center">
        <strong>技术部：</strong>搭建维护官网及小程序，对活动提供技术支持；
      </div>
    </div>
    <div class="box">
      <div class="title">多彩活动：</div>
      <div v-for="(act, index) in actList" :key="index">
        <act-box
          :imgUrl="act.imgUrl"
          :refLinkList="act.refLinkList"
          :title="act.title"
        ></act-box>
      </div>
      <div class="paragrapgh no-margin center">.</div>
      <div class="paragraph no-margin center">.</div>
      <div class="paragraph no-margin center">.</div>
      <div class="paragraph no-margin center">还有 ...</div>
      <div class="paragraph center"><strong>麦屯音乐节、中秋游园夜、羽毛球比赛、达人探店、狼人剧本 ...</strong></div>
    </div>
    <div class="box no-border">
      <div class="title">更多福利：</div>
      <div class="paragraph center">
        CSSA同时为大家举办各种<strong>选课学术，考取驾照，办理信用卡，实习求职，选房租房</strong>等等各式各样的<strong>讲座</strong>，为同学们在美国的学习生活提供多样的帮助。
      </div>
      <img class="icon" src="../assets/contact/xzs.jpg" />
    </div>
    <div class="blank"></div>
    <sponsor></sponsor>
    <page-end></page-end>
  </div>
</template>

<script>
export default {
  name: "AboutCSSA",
  components: {
    Sponsor,
    PageEnd,
    actBox,
  },
  data() {
    return {
      scrollHeader: false,
      actList: [
        {
          imgUrl: require("../assets/about/yanhua.jpg"),
          refLinkList: [
            {
              link: "https://mp.weixin.qq.com/s/ddJ5WBUM5q8aQyqlCM0Wmw",
              text: "【春晚倒计时：1天】明星“揭面”，快加红包群！",
            },
            {
              link: "https://mp.weixin.qq.com/s/NDaVogX6Xlof58vUGR6F4Q",
              text: "【春晚回顾】88天日夜颠倒，只为两小时穿越时空的共同欢聚。",
            },
          ],
          title: "筹备数月，温暖所有华人，麦屯第一盛大的的《春节联欢晚会》",
        },
        {
          imgUrl: require("../assets/about/queshen.jpg"),
          refLinkList: [
            {
              link: "https://mp.weixin.qq.com/s/8BfldX2Ciuv2e0cfFQsA8g",
              text: "【雀神之夜】性感荷官 线下发牌",
            },
          ],
          title: "扑克麻将，合璧中西精华，搏一把刺激赌一把心跳的《雀神之夜》",
        },
        {
          imgUrl: require("../assets/about/feichengwurao-min.jpg"),
          refLinkList: [
            {
              link: "https://mp.weixin.qq.com/s/Mr3SNvW26oOTb9iqNzcZZA",
              text: "【非诚勿扰】你是否愿意为我卸下你的面具",
            },
          ],
          title: "假面舞会，限定的感觉，与那个Ta相遇的《非诚勿扰》",
        },
        {
          imgUrl: require("../assets/about/jiankangbao-min.jpg"),
          refLinkList: [
            {
              link: "https://mp.weixin.qq.com/s/ssskPbKsfWHMjVC0YkiHMQ",
              text: "【疫情专栏】CSSA发放祖国健康包了",
            },
            {
              link: "https://mp.weixin.qq.com/s/0naTBsgRb_W2A9Ld-GPNQA",
              text: "【健康包回顾】对你们致以最诚挚的感谢",
            },
          ],
          title: "心系祖国，众志成城抗疫，CSSA协助中国驻芝加哥总领馆发放健康包",
        },
        {
          title: "竞足烧烤，趁严冬未来之时，在恶魔湖畔的秋日约会",
          refLinkList: [
            {
              link: "https://mp.weixin.qq.com/s/DpqnZBmbXKAf7fxTQitFww",
              text: "【Devil’s Lake】“我不要你习惯一个人生活” | 恶魔湖集体秋游",
            },
          ],
          imgUrl: require("../assets/about/emohu-min.jpg"),
        },
      ],
      backgroundUrl: require("../assets/home/uwmadison.jpg"),
      about_cssa: [
        "CSSA是中国学生学者联合会，是由在海外的留学生自发成立的，如今在全球各地的高校中都不乏其身影的中国学生组织。仅在美国，超过百所高校的中国留学生成立了CSSA。 CSSA在全球发展中日渐成熟，为在美中国学生学者包含本科生、研究生、硕士生、博士生、访问学者以及教授等在内的华人群体提供生活服务，学术支持，以及社交平台。",
        "借着二十年以来的基础，CSSA是UW-Madison十分活跃也极具影响力的华人学生组织，致力于文化之间的交流和校园的多元化。一直以来以建立华人学生学者之间的交流为目标，同时也积极的作为对中华文化有兴趣的人的桥梁。",
        "CSSA一直以来着重于推广中华文化和传统，例如每年最重要的春节晚会，秉持着免费对在校学生和人员开放的原则，准备了各式各样的节目，包含传统舞蹈，歌唱表演，脱口秀和其他精彩的表演。每年在 Memorial Union举办的春晚二十年来不只吸引了华人学生和华人家庭，也有越来越多美国当地的家庭出席甚至参与演出。",
        "这些活动不只为学生们带来了生活乐趣和归属感，在推广中华文化的同时也为麦迪逊带来了不一样的文化气息。当然这些成绩不是一个力量下的成果，而是集结了各个学生以及组织，还有很多人的一份心力。",
      ],
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
    toMain: function () {
      this.$router.push("/");
    },
    toContact:function(){
      this.$router.push("Contact");
    },
    toMember:function(){
      this.$router.push("Member");
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
import Sponsor from "../components/sponser.vue";
import PageEnd from "../components/pageEnd.vue";
import actBox from "../components/actBox.vue";
</script>

<style lang="postcss" scoped>
.main {
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
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
  flex-direction: row;
  padding: 0 10vw 0 10vw;
  -webkit-transition: all 3s ease;
  transition: all 0.5s ease;
  background: white;
}
.header_scroll {
  height: 60px;
}
.icon_col {
  display: flex;
  width: 50vw;
  flex-direction: row;
  align-items: left;
  border-bottom: 1px solid #e9e9e9;
}
.menu_col {
  font-family: raleway, arial, sans-serif;
  display: flex;
  width: 30vw;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #4c4c4c;
  font-size: 13px;
  text-transform: uppercase;
  margin: 0 10vw 0 10vw;
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
.paragraph {
  width: 60vw;
  margin-bottom: 5vh;
  color: #777;
  line-height: 1.6;
}
.title {
  font-size: 32px;
  font-family: raleway, arial, sans-serif;
  line-height: 1.6;
  text-align: center;
  color: #2f2f2f;
  font-weight: 300;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  margin-bottom: 2vh;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  margin-left: 20vw;
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: 5vh;
}
.center {
  text-align: center;
}
.no-margin {
  margin: 0 0 0 0;
}
.icon {
  height: auto;
  max-width: 100vw;
}
.no-border {
  border-bottom: 0px;
}
.blank {
  min-height: 20vh;
  min-width: 100vw;
  background-color: #f9f9f9;
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
</style>