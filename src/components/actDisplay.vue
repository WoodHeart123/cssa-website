<template>
  <div class="section">
    <div class="act_title">过往活动</div>
    <div class="act">
      <div class="column">
        <div v-for="(act, index) in act_arr" v-bind:key="index">
          <div class="box" v-if="index <= 3">
            <div class="title_text">{{ act.title }}</div>
            <div class="title_body">{{ act.description }}</div>
          </div>
        </div>
      </div>
      <img class="img" :src="act_img" />
      <div class="column">
        <div v-for="(act, index) in act_arr" v-bind:key="index">
          <div class="box align_left" v-if="index > 3">
            <div class="title_text">{{ act.title }}</div>
            <div class="title_body">{{ act.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActDisplay",
  data() {
    return {
      act_arr: [
        {
          title: "麦迪逊华人春晚",
          description: "筹备数月，温暖所有华人，麦屯第一盛大的的春节联欢晚会",
        },
        {
          title: "春节冰上烟花",
          description: "严寒除夕，划过Mendota夜空，无比璀璨感动的冰上烟火大会",
        },
        {
          title: "雀神之夜",
          description: "扑克麻将，合璧中西精华，搏一把刺激赌一把心跳的雀神之夜",
        },
        {
          title: "非诚勿扰",
          description: "假面舞会，限定的感觉，与那个ta相遇的非诚勿扰",
        },
        {
          title: "恶魔湖秋游",
          description: "竞足烧烤，趁严冬未来之时，在恶魔湖畔的秋日约会",
        },
        {
          title: "电竞月",
          description: "王者归来，热血的团队博弈，吃鸡联盟DOTA炉石齐上阵",
        },
        {
          title: "麦屯音乐节",
          description: "音浪环绕，抢麦接歌猜曲，中华小曲库跟着音乐动起来",
        },
        {
          title: "更多活动",
          description: "羽毛球比赛、达人探店、狼人剧本 ...",
        },
      ],
      act_img: require("../assets/home/activities-2021.jpg"),
    };
  },
};
</script>

<style lang="postcss" scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 80vh !important;
  margin-top: 20px;
}
.act {
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-between;
  margin: 0 10vw 0 10vw;
}

.column {
  display: flex;
  flex-direction: column;
}

.img {
  width: 20vw;
  height: 60vh;
}

.box {
  padding:0 10vw 0 5vw;
  width: 20vw;
  height: 10vh;
  margin-bottom: 5vh;
  text-align: right;
}

.align_left {
  text-align: left;
}

.title_text {
  color: #c5050c;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
}
.title_body {
  color: #777;
  font-weight: 400;
  font-size: 0.95em;
  line-height: 1.6;
}

.act_title{
  font-family: raleway, arial, sans-serif;
  color: #2f2f2f;
  font-weight: 300;
  font-size: 36px;
  margin-bottom: 50px;
}
</style>