<template>
  <div class="box" @click="toWechat">
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
  props:["board"],
  methods: {
    toWechat: function(){
      window.open(this.board.url,"");
    }
  }
};
</script>

<style lang="postcss" scoped>
.box{
  width:60vw;
  height:50vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  background: transparent;
  transition: box-shadow 0.3s ease;
}
.box:hover{
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.board-text{
  font-weight: bold;
  font-size: 30px;
}
.text-box{
  max-height: 300px;
  min-height: 300px;
  border:1px solid #ccc;
  background: #eee;
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