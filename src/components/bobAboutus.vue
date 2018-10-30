<template>
  <section class="section2 flex flex-column" id="section2">
    <div class="content" id="aboutus">
      <swiper class="swiper-wrapper">
        <swiperSlide class="swiper-slide">
          <p>品牌的建立是为了产品（服务）更具有竞争力的立足于市场，否则再创新性的品牌设计也只是不实用的花衣而已。
            因此，品牌能够转化成产品（服务）这才是塑造品牌的意义所在。</p>
        </swiperSlide>
        <swiperSlide class="swiper-slide flex flex-column">
          <p>精悍的团队使卓宜设计具有更专业、更灵动的服务机制。降低沟通成本，简化项目流程，
            让更多的时间留给创作与研究，为客户做出卓越并且准确的设计。
          </p>
        </swiperSlide>
        <swiperSlide class="swiper-slide">
          <p>适合并卓越的设计将会助力每一个向往成功的品牌突破自己，获得不可估量的商业价值。</p>
        </swiperSlide>
      </swiper>
    </div>
    <div class="swiper-pagination" id="section2-pagination" slot="pagination"></div>
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

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '#section2-pagination',
          clickable: true
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
<style lang="less" scoped>
@import "../less/variable.less";
@import "../less/mixin.less";
@import "../less/common.less";

#section2 {
  box-sizing: border-box;
  margin-bottom: 70px;
  .background-cover();
  height: 500px;
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
    display: flex;
    align-items: center;

    .swiper-pagination-bullet {
      transition: all 0.3s;
      background: #fff;
      border: 2px solid #ddd;
      margin: 0 6px;

      &.swiper-pagination-bullet-active {
        // background: @color-theme;
        width: 12px;
        height: 12px;
      }
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
