<template>
  <div class="act-box">    
    <div>
      <img  class="act-img" :src="imgUrl">
    </div>
    <div class="act-title">{{title}}</div>
    <div class="act-link-list">
      <div v-for="(refLink,index) in refLinkList" v-bind:key="index">
        <a class="link-text" :href="refLink.link">⇒{{refLink.text}}</a>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "actBox",
  props: ["imgUrl","refLinkList","title"],
};
</script>
<style lang="postcss" scoped>
.act-title{
  font-size: 22px;
  font-family: raleway, arial, sans-serif;
  line-height: 1.6;
  text-align: center;
  color: #2f2f2f;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  margin-bottom: 1vh;
}
.act-box{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  margin-bottom: 5vh;
}
.act-link-list{
  width:650px;
  display:flex;
  flex-direction: column;
  align-items: center;
}
.link-text{
  margin-bottom: 5px;
  text-align: center;
  color: #4c4c4c;
  text-decoration: none;
}
.link-text:hover{
  cursor: pointer;
}
.act-img{
  width: 650px;
  height:400px;
  margin-bottom:3vh;
}
</style>
