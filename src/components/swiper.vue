<template>
  <transition name="slide-fade">
    <div
      class="swipe"
      :style="{ 'background-image': 'url(' + back_img[img_index] + ')' }"
      v:bind:key="img_index"
    >
      <div class="container">
        <div class="org_name">
          <div>威斯康辛大学麦迪逊分校</div>
          <div>中国学生学者联合会</div>
        </div>
        <div class="font_large">最专业、最靠谱、最CSSA</div>
        <div class="button">关于CSSA</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      back_img: [require("../assets/home/2020members.jpg"),require("../assets/home/choujiang.jpg"),require("../assets/home/chunwan.jpg"),require("../assets/home/yanhua.jpg")],
      img_index: 1,
    };
  },
  methods: {
    increment() {      
      let img = new Image();
      img.onload = () => {
        console.log('img loaded');
        this.img_index = (this.img_index + 1) % this.back_img.length;4
      }
      img.src = this.back_img[(this.img_index + 1) % this.back_img.length];

    },
    getBackgroundImage:function(){
      let opt = {
        type:"get",
        url:"user/background",
      };
      window.console.log(opt.url);
      api(opt, (ret) => {
        if(ret.status == 200){
          let imgUrl = "";
          for(imgUrl of ret.data){
            this.back_img.push("http://m.leosun.top/image/"+imgUrl);
          }
        }
      },(error) => {
        window.console.log(error);
      });
    },
  },
  created(){
    //this.getBackgroundImage();
  },
  mounted() {
    this.timer = setInterval(this.increment, 10000);

  },
};
import api from '../util/api';
</script>

<style lang="postcss" scoped>
.swipe {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-size: 1920px 1200px;
  background-position: center;
  opacity: 20;
  background-color: rgba(17, 17, 17, 0.7);
  background-blend-mode: multiply;
  -webkit-transition: all 3s ease;
  transition: all 3s ease;
  opacity: 1;
}

/**slide-fade transition */
.slide-fade-enter-active {
  opacity: 1;
  z-index: 10;
}

.slide-fade-leave-active {
  opacity: 1;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
/**slide-fade transition  */

.font_white {
  font-family: raleway, arial, sans-serif;
  font-weight: 500;
  color: #c9c9c9;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 100vw;
  color: #c9c9c9;
}

.font_large {
  font-size: 66px;
  color: white;
}

.org_name {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  margin-bottom: 20px;
}

.button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  margin-top: 40px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid;
}

.button:hover {
  text-decoration: none;
  background-color: white;
  outline: 0;
  transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
}
</style>