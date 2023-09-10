<template>
  <div class="foot">
    <div>
      <img class="logo_gif" src="../assets/home/Logo-02.gif" />
    </div>
    <div class="footnote">
      <a>© 威斯康辛大学中国学生学者联合会 2023</a>
    </div>
  </div>
</template>


<script>
export default {
  name: "PageEnd",
};
</script>



<style lang="postcss" scoped>
.foot{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100vw;
  height:30vh;
  background-color: #f9f9f9;
  padding:10vh 0 10vh 0;
}
.logo_gif{
  height:200px;
  width:500px;
}
.footnote{
  padding-top: 2vh;
  font-size: 16px;
  line-height: 1.6;
  color: #777;
  font-weight: 400;
}
</style>