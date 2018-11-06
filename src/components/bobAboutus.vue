<template>
  <section class="section2 flex flex-column" id="section2">
    <div class="content" id="aboutus">
      <swiper class="swiper-wrapper" :options="swiperOption">
        <swiperSlide class="swiper-slide">
          <p>品牌的建立是为了产品（服务）更具有竞争力的立足于市场，否则再创新性的品牌设计也只是不实用的花衣而已。
            因此，品牌能够转化成产品（服务）这才是塑造品牌的意义所在。</p>
        </swiperSlide>
        <swiperSlide class="swiper-slide flex flex-column">
          <p>精悍的团队使BOB具有更专业、更灵动的服务机制。降低沟通成本，简化项目流程，
            让更多的时间留给创作与研究，为客户做出卓越并且准确的设计。
          </p>
        </swiperSlide>
        <swiperSlide class="swiper-slide">
          <p>适合并卓越的设计将会助力每一个向往成功的品牌突破自己，获得不可估量的商业价值。</p>
        </swiperSlide>

      </swiper>
      <div class="swiper-pagination" id="section2-pagination" slot="pagination"></div>
    </div>

  </section>
</template>

<script>
// @ is an alias to /src
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'home',
  components: {
    swiper,
    swiperSlide
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
      }
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
  methods: {}
}
</script>
<style lang="less" >
@import "../less/variable.less";
@import "../less/mixin.less";
@import "../less/common.less";
#section2 {
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  .background-cover();
  height: 3.5rem;
  background-image: url("../images/about_bg.jpg");
  justify-content: space-around;
  background-attachment: fixed;
  position: relative;

  .content {
    width: 48%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    position: relative;
    .swiper-slide {
      .flex-column();
      color: #fff;
      font-size: 24px;
      justify-content: space-around;
      p {
        text-align: left;
        opacity: 0.7;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: -30px;
          left: 0;
          width: 15%;
          height: 2px;
          background: #fff;
        }
      }
    }
  }

  #section2-pagination {
    bottom: 20px;
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
    .content {
      width: 90%;

      .swiper-slide {
        font-size: 22px;
      }
    }
  }
}
</style>
