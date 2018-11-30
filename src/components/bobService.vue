<template>
  <section class="section1 section" id="section1">
    <h5 class="section-title">
      <span>
        服务范围 /
        <span class="en">our service</span>
      </span>
    </h5>
    <div class="container-fluid service-wrapper">
      <el-row class="cards">
        <el-col
          :lg="4"
          :sm="8"
          :xs="12"
          class="card wow fadeInDown"
          data-wow-delay=".5s"
          data-wow-duration="1s"
        >
          <router-link class="mask flex flex-column" tag="div" to="/service/a">
            <p class="p1">
              <span>A</span>nalytics
            </p>
            <div class="p2">
              <p>品牌核心价值</p>
              <p>品牌研究</p>
              <p>品牌定位</p>
              <p>品牌愿景</p>
              <p>品牌使命</p>
              <p>品牌主张</p>
              <p>品牌命名</p>
            </div>
            <p class="serviceIcon">
              <i class="iconfont">&#xe63b;</i>
            </p>
          </router-link>
        </el-col>
        <el-col
          :lg="4"
          :sm="8"
          :xs="12"
          class="card wow fadeInDown"
          data-wow-delay=".3s"
          data-wow-duration="1.2s"
          data-wow-offset="10"
        >
          <router-link tag="div" to="/service/b" class="mask flex flex-column">
            <p class="p1">
              <span>B</span>randing
            </p>
            <div class="p2">
              <p>VI基础部分设计</p>
              <p>VI应用部分设计</p>
              <p>LOGO标志设计</p>
              <p>宣传册设计</p>
              <p>PPT模板</p>
            </div>
            <!-- <p class="p3">+</p> -->
            <p class="serviceIcon">
              <i class="iconfont">&#xe601;</i>
            </p>
          </router-link>
        </el-col>
        <el-col
          :lg="4"
          :sm="8"
          :xs="12"
          class="card wow fadeInDown"
          data-wow-delay="0.5s"
          data-wow-duration="1s"
        >
          <router-link tag="div" to="/service/c" class="mask flex flex-column">
            <p class="p1">
              <span>C</span>ampaign
            </p>
            <div class="p2">
              <p>线下事件活动服务</p>
              <p>线上事件营销活动</p>
              <p>传播侃拼方案</p>
              <p>媒体管理服务</p>
              <p>传播调研</p>
              <p>传播策略</p>
            </div>
            <p class="serviceIcon">
              <i class="iconfont">&#xe600;</i>
            </p>
          </router-link>
        </el-col>
        <el-col
          :lg="4"
          :sm="8"
          :xs="12"
          class="card wow fadeInDown"
          data-wow-delay=".3s"
          data-wow-duration="1.2s"
        >
          <router-link tag="div" to="/service/d" class="mask flex flex-column">
            <p class="p1">
              <span>D</span>igital & Web
            </p>
            <div class="p2">
              <p>微信平台解决方案</p>
              <p>服务器运营外包</p>
              <p>高端官网定制</p>
              <p>移动端网站建设</p>
              <p>业务系统开发</p>
              <p>H5应用开发</p>
            </div>

            <p class="serviceIcon">
              <i class="iconfont">&#xe639;</i>
            </p>
            <!-- <p class="p3">+</p> -->
          </router-link>
        </el-col>
        <el-col
          :lg="4"
          :sm="8"
          :xs="12"
          class="card wow fadeInDown"
          data-wow-delay="0.5s"
          data-wow-duration="1s"
        >
          <router-link tag="div" to="/service/e" class="mask flex flex-column">
            <p class="p1">
              <span>E</span>ditorial
            </p>
            <div class="p2">
              <p>年度摄影服务</p>
              <p>年度影视服务</p>
              <p>家庭影像服务</p>
              <p>商业摄影</p>
              <p>人物传记</p>
              <p>宣传片</p>
            </div>
            <p class="serviceIcon">
              <i class="iconfont">&#xe62c;</i>
            </p>
          </router-link>
        </el-col>
        <el-col
          :lg="4"
          :sm="8"
          :xs="12"
          class="card wow fadeInDown"
          data-wow-delay=".3s"
          data-wow-duration="1.2s"
        >
          <router-link tag="div" to="/service/f" class="mask flex flex-column">
            <p class="p1">
              <span>F</span>abrication
            </p>
            <div class="p2">
              <p>广告印刷产品</p>
              <p>广告电子产品</p>
              <p>广告户外产品</p>
              <p>文化周边产品</p>
              <p>场地装饰产品</p>
            </div>
            <p class="serviceIcon">
              <i class="iconfont">&#xe6bc;</i>
            </p>
            <!-- <p class="p3">+</p> -->
          </router-link>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import { WOW } from "wowjs";

export default {
  name: "bobHeader",
  props: {
    msg: String
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    toogleSideNav() {
      this.show = !this.show;
    }
  },
  mounted() {
    new WOW().init();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../less/variable.less";
@import "../less/mixin.less";
@import "../less/common.less";

#section1 {
  background: #f5f5f5;
  padding: 0.5rem 0;

  .service-wrapper {
    margin: 0 100px;
  }

  .section-title {
    margin-bottom: 0.5rem;
  }

  .cards {
    .card {
      cursor: pointer;
      .background-cover();
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      height: 320px;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition: all 0.3s;
      text-align: center;
      -ms-flex-pack: distribute;
      position: relative;
      margin-bottom: 0.2rem;
      padding: 0 7px;
      box-sizing: border-box;
      .mask {
        .background-cover();
        position: relative;
        z-index: 2;
        justify-content: flex-start;
        height: 100%;
        transition: all 0.5s;
        padding-top: @font-size-xxl;
        box-sizing: border-box;
        color: #333;

        .serviceIcon {
          position: absolute;
          bottom: -12px;
          right: 0;
          color: #f5f5f5;
          opacity: 0.8;
          font-size: 0.7rem;
          z-index: -1;
        }

        &:hover {
          transform: translateY(-10px);
          color: @color-theme;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }
      }

      &:nth-of-type(odd) {
        .mask {
          background-color: #fff;
        }
      }

      &:nth-of-type(even) {
        .mask {
          background-color: #fff;
        }
      }

      .p1 {
        font-size: @font-size-xxl;
        font-weight: bold;

        span {
          font-size: 0.4rem;
        }
      }

      .p2 {
        font-size: 15px;
        line-height: 25px;
        margin-top: @font-size-xl;
        text-align: center;
      }

      .p4 {
        display: none;
      }

      .p3 {
        font-weight: bold;
        font-size: @font-size-xl;
      }
    }
  }

  @media (max-width: 1200px) {
    .service-wrapper {
      margin: auto;
    }
  }

  @media (max-width: 768px) {
    .service-wrapper {
      margin: auto;
    }

    .cards {
      .card {
        height: 280px;
      }
    }
  }
}
</style>