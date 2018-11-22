<template>
  <section class="section4 container " id="section4">
    <el-row class="content row">
      <el-col :md="6" :sm="12" :xs="12" class="item">
        <div class="icon-wrapper">
          <div class="bg"></div>
          <p class="text"><span>10</span><span class="sub"> 年</span></p>
        </div>
        <p class="p1">行业经验</p>
        <p class="p2">Industry experience</p>
      </el-col>
      <el-col :md="6" :sm="12" :xs="12" class="item">
        <div class="icon-wrapper">
          <div class="bg"></div>
          <p class="text"><span>88</span><span class="sub"> 家</span></p>
        </div>
        <p class="p1">客户选择</p>
        <p class="p2">Customer choice</p>
      </el-col>
      <el-col :md="6" :sm="12" :xs="12" class="item">
        <div class="icon-wrapper">
          <div class="bg"></div>
          <p class="text"><span>180</span><span class="sub"> 项</span></p>
        </div>
        <p class="p1">服务标准</p>
        <p class="p2">service standard</p>
      </el-col>
      <el-col :md="6" :sm="12" :xs="12"  class="item">
        <div class="icon-wrapper">
          <div class="bg"></div>
          <p class="text"><span>100</span><span class="sub"> %</span></p>
        </div>
        <p class="p1">客户满意度</p>
        <p class="p2">customer satisfaction</p>
      </el-col>
    </el-row>
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
    return {}
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

@wrapper: 1.4rem;
#section4 {
  padding-top: 0.5rem;
  background: #fff;
  .content {
    margin: 0 auto;
    flex-wrap: wrap;
    max-width: 1200px;
    .icon-wrapper {
      position: relative;
      height: @wrapper;
      width: @wrapper;
      margin: 0 auto;
      .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("../images/icon-2.png") no-repeat center center;
        background-size: 100% 100%;
        transition: all ease-in-out 0.5s;
        animation: rotate infinite linear 3s;
      }

      .text {
        height: 100%;
        line-height: @wrapper;
        color: @color-theme;
        font-size: 0.6rem;
        .sub {
          display: inline-block;
          font-size: 0.12rem;
          transform: translateY(-0.4rem);
          color: #333;
        }
      }
      @keyframes rotate {
        100% {
          transform: rotateZ(360deg);
        }
      }
    }

    .item {
      text-align: center;
      margin-bottom: 0.3rem;
      .p1 {
        // margin-top: 20px;
        // font-size: 20px;
        // line-height: 35px;
        margin-top: 0.15rem;
        font-size: 0.15rem;
        line-height: 0.3rem;
      }

      .p2 {
        font-size: 14px;
        line-height: 25px;
        height: 50px;
        color: #888;
        text-transform: uppercase;
      }
    }
  }
  @media (max-width: 768px) {
    .content {
      width: 100%;
      justify-content: space-around;
    }
  }
}
</style>
