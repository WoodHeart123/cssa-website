<template>
  <div class="member_box">
    <img class="member_img" :src="member.imageUrl" />
    <div class="member_title">
      <div class="name">{{ member.name }}</div>
      <div class="position">{{ member.position }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardMember",
  props: ["member"],
};
</script>

<style lang="postcss" scoped>
.member_box {
  display: flex;
  flex-direction: column;
  width:20vw;
  height:80vh;
  margin-right:3vw;
  margin-left:3vw;
}
.member_img {
  height: 30vw;
  width:20vw;
  margin-bottom: 1vw;
}
.member_title {
  display: flex;
  flex-direction: row;
  width: 20vw;
  height: 5vh;
  margin-bottom:2vh;
  justify-content: space-between;
  align-items: center;
}

.intro_box{
  width:20vw;
  height:33vh;
}
.position {
  font-size: 18px;
  text-align: righ;
  color: #777;
}
.intro {
  font-size: 14px;
  color: #777;
}

.name {
  font-weight: 400;
  color: #2f2f2f;
  font-size: 22px;
}

@font-face {
  font-family: 'iconfont';
  src: url('../assets/icon/iconfont.ttf?t=1646690092504') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 25px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    color: #777;
}

.list{
  display:flex;
  flex-direction: row;
  margin-bottom:2px;
}
</style>
