<template>
  <div class="box">
    <div class="header">
      <img class="arrow" style="margin-left:10vw" src="../assets/icon/arrow-right.png" />
      <div class="board-text">{{board.title}}</div>
      <img class="arrow" style="margin-right:10vw" src="../assets/icon/arrow-left.png" />
    </div>
    <div class="text-box">
      <span class="text" v-for="(par, index) in board.text" :key="index">{{par}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberBox",
  props:["board"]
};
</script>

<style lang="postcss" scoped>
.box{
  width:100vw;
  height:50vh;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 10vh;
}
.header{
  display: flex;
  width:60vw;
  flex-direction: row;
  margin-left:20vw;
  align-items: center;
  justify-content: space-between;
}
.board-text{
  font-weight: bold;
  font-size: 30px;
}
.text-box{
  width:60vw;
  max-height: 300px;
  min-height: 300px;
  border:1px solid #ccc;
  background: #eee;
  margin-left:20vw;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}
.text{
  line-height: 1.6;
  font-size:25px;
  color:#2f2f2f;
}
.arrow{
  height: 100px;
}
</style>