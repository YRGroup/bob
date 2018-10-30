<template>
  <div class="index-banner">
    <div  class="banner-bg" >
      <video  src="http://yr-zhxy.oss-cn-beijing.aliyuncs.com/bob/bob-video.mp4" autoplay="autoplay" loop="" preload="auto" muted></video>
    </div>
    <div  class="banner-swiper" id="banner">
      <swiper :options="swiperOption" ref="mySwiper" style="height:100%;">
        <swiper-slide class="flex">
          <div class="text">
            <p class="p3">We Energize Your Own</p>
            <div class="flex keyword ">
              <router-link class="key-link strings" :to="keyLink">
                <vue-typer @typed='onTyped' :text="wordList" ></vue-typer>
              </router-link>
              <!-- <span class="curse">|</span> -->
            </div>
          </div>
          <div class="cn keyword-cn">
            <!-- <vue-typer text="bob"></vue-typer> -->
          </div>
        </swiper-slide>
        <swiper-slide class="flex">
          <div class="text animated" >
            <p class="p1">bridges of brands</p>
            <p class="p2">赋能那些为人性光辉付出努力的个人和组织</p>
          </div>
        </swiper-slide>
        <div class="prev-btn swiper-btn flex" slot="button-prev">
          <div class="lines">
            <span class="top-line line"></span>
            <span class="bottom-line line"></span>
          </div>
          <p class="tip"></p>
        </div><!--左箭头-->
        <div class="next-btn swiper-btn flex" slot="button-next">
          <p class="tip"></p>
          <div class="lines">
            <span class="top-line line"></span>
            <span class="bottom-line line"></span>
          </div>
        </div><!--右箭头-->
      </swiper>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import { VueTyper } from "vue-typer";
import { keyWords } from "@/assets/keywords";
console.log(keyWords);
export default {
  name: "home",
  components: {
    swiper,
    swiperSlide,
    VueTyper
  },
  data() {
    return {
      swiperOption: {
        // autoplay: true,
        simulateTouch: false, // 禁止鼠标模拟
        // effect: 'fade',
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: ".next-btn",
          prevEl: ".prev-btn"
        }
      },
      keyLink: ""
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
    // this.initSwiper();
    this.wordList = this.getStringList(keyWords);
  },
  methods: {
    getStringList(strings) {
      let arr = [];
      strings.forEach(element => {
        arr.push(element.keyword);
      });
      return arr;
    },
    onTyped(ev) {
      let index =this.wordList.indexOf(ev)
      this.keyLink = `/service/${keyWords[index]['type']}`
      // wordList.indexOf(ev)
    }
  }
};
</script>
<style lang="less" scoped>
@import "../less/mixin.less";
.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */

  .custom.char {
    /* Styles for each character
       e.g. color, background-color */

    &.typed {
      color: #fff;
      /* Styles specific to typed characters
         i.e. characters to the left of the caret */
    }
    &.selected {
      color: #fff;
    }
    &.erased {
      color: #fff;
    }
  }
}
.flex {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-between;
}

.flex-column {
  .flex();
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.index-banner {
  position: relative;

  .banner-bg {
    // .bg_modal();
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &::before {
      content: "";
      background: url("../images/cover.png") repeat;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
    }

    video {
      margin: auto;
      position: absolute;
      z-index: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .scroll-icon {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 40px;
    left: 50%;
    margin-left: -20px;
    z-index: 90;
    animation: scrollIcon 3s ease infinite;
  }
}
#banner {
  z-index: 2;
  overflow: hidden;
  position: relative;
  height: 100vh;

  // background: #333;
  .keyword {
    justify-content: center;
  }

  .cn {
    position: absolute;
    bottom: 10%;
    color: #fff;
    font-size: 14px;
  }

  .strings {
    font-size: 80px;
    color: @color-theme;
    display: inline-block;
    // line-height: 95px;
    font-weight: bold;
    // text-transform: uppercase;
    margin-top: 20px;

    .animated {
      animation-duration: 0s;
    }
  }

  .keyword-cn {
    color: #fff;
    font-size: 14px;

    a {
      color: @color-theme;
    }
  }

  .curse {
    font-size: 60px;
    animation: curse 1s ease infinite;
    // transform: translateY(-6px);
  }

  .p1 {
    text-transform: uppercase;
    font-size: 80px;
    // line-height: 95px;
    font-weight: bold;
  }

  .p2 {
    // font-weight: bold;
    font-size: 18px;
    line-height: 50px;
  }

  .p3 {
    font-size: 18px;
    line-height: 40px;
    // letter-spacing: 1px;
  }

  .swiper-slide {
    height: 100%;
    // .background-cover();
    justify-content: space-around;

    .text {
      text-align: center;
      color: #fff;
      animation-duration: 1s;
    }
  }

  .swiper-btn {
    position: absolute;
    bottom: 50%;
    z-index: 90;
    color: #fff;
    outline: none;
    padding: 0 20px;
    opacity: 0.7;

    .lines {
      height: 40px;
      position: relative;
      transition: transform 0.3s;
    }

    .tip {
      height: 2px;
      background: #fff;
      font-weight: bold;
      width: 0;
      transition: width 0.3s;
      margin: 0 10px;
    }

    .line {
      position: absolute;
      width: 2px;
      height: 20px;
      background: #fff;
      display: block;
      transition: all 0.3s;
    }

    .top-line {
      transform-origin: bottom;
      top: 0;
      left: 0;
    }

    .bottom-line {
      transform-origin: top;
      bottom: 0;
      left: 0;
    }

    &.prev-btn:hover {
      .lines {
        transform: translateX(-10px);
      }

      .tip {
        width: 20px;
      }

      .top-line {
        transform: rotateZ(45deg);
        // height: 60px;
      }

      .bottom-line {
        transform: rotateZ(-45deg);
        // height: 60px;
      }
    }

    &.next-btn:hover {
      .lines {
        transform: translateX(10px);
      }

      .tip {
        width: 20px;
      }

      .top-line {
        transform: rotateZ(-45deg);
      }

      .bottom-line {
        transform: rotateZ(45deg);
      }
    }
  }

  .prev-btn {
    left: 50px;
  }

  .next-btn {
    right: 50px;
  }

  @media (max-width: 768px) {
    .prev-btn {
      left: 0;
    }

    .next-btn {
      right: 0;
    }

    .curse {
      font-size: 40px;
    }

    .strings {
      font-size: 40px;
      margin-top: 10px;
    }

    .p1 {
      font-size: 40px;
    }

    .p2 {
      font-size: 14px;
    }

    .p3 {
      font-size: 14px;
    }
  }
}
</style>
