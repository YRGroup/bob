<template>
  <section
    class="section2 flex flex-column"
    :style="{backgroundPositionY:offsetY+'px'}"
    ref="prax"
    id="section2"
  >
    <div class="content" id="aboutus">
      <swiper class="swiper-wrapper kangxi" :options="swiperOption">
        <swiperSlide class="swiper-slide">
          <p>
            <span>不讨论的代价,</span>
            <span>比瞎讨论的代价还要大。</span>
          </p>
        </swiperSlide>
        <swiperSlide class="swiper-slide flex flex-column">
          <p>
            <span>划掉多余的，</span>
            <span>美化剩下的。</span>
          </p>
        </swiperSlide>
        <swiperSlide class="swiper-slide">
          <p>
            <span>如果你外婆不明白你在搞什么，</span>
            <span>你就没有在搞事情。</span>
          </p>
        </swiperSlide>
        <swiperSlide class="swiper-slide">
          <p>
            <span>互联网最起码的作用是,</span>
            <span>让你难以回首没有它的日子。</span>
          </p>
        </swiperSlide>
        <swiperSlide class="swiper-slide">
          <p>
            <span>纪录一下自己，给关心你的。</span>
            <span>纪录一下他人，给你关心的。</span>
          </p>
        </swiperSlide>
        <swiperSlide class="swiper-slide">
          <p>
            <span>如果品牌是首诗歌，</span>
            <span>造出的产品就是诗朗诵。</span>
          </p>
        </swiperSlide>
      </swiper>
      <div class="swiper-pagination" id="section2-pagination" slot="pagination"></div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import parallax from '@/components/parallax'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'home',
  components: {
    swiper,
    swiperSlide,
    parallax
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        spaceBetween: 60,
        pagination: {
          el: '#section2-pagination',
          clickable: true,
          // type: 'fraction'
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        }
      },
      offsetY: 0
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  created () {
    // this.initSwiper();
  },
  mounted () {
    let offsetY = this.$refs.prax.offsetTop
    let windowH = document.documentElement.clientHeight
    let defaultY = offsetY - windowH
    let domH = this.$refs.prax.clientHeight
    window.addEventListener('scroll', ev => {
      if (window.scrollY > defaultY) {
        this.offsetY = Math.floor((defaultY - window.scrollY) / 3)
      }
    })
  },
  methods: {}
}
</script>
<style lang="less" >
@import "../less/variable.less";
@import "../less/mixin.less";
@import "../less/common.less";

#section2 {
  box-sizing: border-box;
  // margin-bottom: 0.5rem;
  .background-cover();
  height: 3.5rem;
  background-image: url("../images/about_bg2.jpg");
  justify-content: space-around;
  background-repeat: repeat;
  position: relative;
  // transition: all 0.1s;
  // background-size: 100% 100vh;
  .content {
    width: 48%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    position: relative;
    .swiper-slide {
      .flex-column();
      // padding-top: 20%;
      box-sizing: border-box;
      color: #fff;
      font-size: 0.3rem;
      justify-content: space-around;
      p {
        text-align: left;
        // opacity: 0.7;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: -30px;
          left: 0;
          width: .5rem;
          height: 2px;
          background: #fff;
        }
        span {
          display: block;
        }
      }
    }
  }

  #section2-pagination {
    bottom: 0;
    left: 0;
    right: 0;
    .my-bullet {
      opacity: 0.6;
      cursor: pointer;
      transition: all 0.3s;
      background: #fff;
      border: 2px solid #fff;
      margin: 0 8px;
      width: 2px;
      height: 6px;
      display: inline-block;
      outline: none;
    }
    .my-bullet-active {
      height: 16px;
    }
  }

  @media (max-width: 768px) {
    background-image: url("../images/about_bg.jpg");
    .content {
      width: 90%;
    }
  }
}
</style>
