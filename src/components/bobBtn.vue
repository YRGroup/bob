<template>
  <section class="section1 section" id="section1">
    <h5 class="section-title">
      <span>服务范围 / <span class="en">our service</span> </span>
    </h5>
    <div class="container-fluid wrapper">
      <el-row class="cards">
        <el-col :lg="4" :sm="12" :xs="24" class="card">
          <div class="mask  flex flex-column">
            <p class="p1">
              <span>A</span>nalytice
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
            <!-- <p class="p3">+</p> -->
          </div>
        </el-col>
        <el-col :lg="4" :sm="12" :xs="24" class="card">
          <div class="mask  flex flex-column">
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
          </div>
        </el-col>
        <el-col :lg="4" :sm="12" :xs="24" class="card">
          <div class="mask  flex flex-column">
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
            <!-- <p class="p3">+</p> -->
          </div>
        </el-col>
        <el-col :lg="4" :sm="12" :xs="24" class="card">
          <div class="mask  flex flex-column">
            <p class="p1">
            <span>D</span><span style="font-size:24px">igital & web</span>
          </p>
          <div class="p2">
            <p>微信平台解决方案</p>
            <p>服务器运营外包</p>
            <p>高端官网定制</p>
            <p>移动端网站建设</p>
            <p>业务系统开发</p>
            <p>H5应用开发</p>
          </div>
            <!-- <p class="p3">+</p> -->
          </div>
        </el-col>
        <el-col :lg="4" :sm="12" :xs="24" class="card">
          <div class="mask  flex flex-column">
            <p class="p1">
            <span>E</span>ditorial
          </p>
          <div class="p2">
            <p>年度影视服务</p>
            <p>年度图片服务</p>
            <p>企业宣传片</p>
          </div>
            <!-- <p class="p3">+</p> -->
          </div>
        </el-col>
        <el-col :lg="4" :sm="12" :xs="24" class="card">
          <div class="mask  flex flex-column">
            <p class="p1">
            <span>F</span>abrication
          </p>
          <div class="p2">
            <p>环境导视系统设计制作</p>
            <p>周边产品定制</p>
            <p>印刷品制作</p>
            <p>服装定制</p>
          </div>
            <!-- <p class="p3">+</p> -->
          </div>
        </el-col>
      </el-row>
    </div>

  </section>
</template>

<script>
export default {
  name: 'bobHeader',
  props: {
    msg: String
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toogleSideNav () {
      this.show = !this.show
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../less/variable.less";
@import "../less/mixin.less";
@import "../less/common.less";

#section1 {
  // padding-top: 68px;
  // padding-bottom: 80px;
  padding: 0.5rem 0;
  .wrapper {
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
      height: 360px;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition: all 0.3s;
      text-align: center;
      -ms-flex-pack: distribute;
      position: relative;

      // background-image: url('../images/serviceBg1.jpg');
      .mask {
        z-index: 2;
        justify-content: flex-start;
        height: 100%;
        transition: all 0.5s;
        padding-top: 30px;
        box-sizing: border-box;
      }

      &:hover {
        .mask {
          background: rgba(229, 77, 4, 0.5);
          color: #fff;

          .p1 {
            color: #fff;
          }

          .p2 {
            color: #fff;
          }
        }
      }

      &:nth-of-type(odd) {
        background-color: #eeeeee;
      }

      &:nth-of-type(even) {
        background-color: #f7f7f7;
      }

      .p1 {
        font-size: 28px;
        color: #333;
        font-weight: bold;

        span {
          font-size: 64px;
        }
      }

      .p2 {
        font-size: 15px;
        line-height: 30px;
        color: #333;
        transition: all 0.3s;
        min-height: 180px;
        margin-top: 20px;
        text-align: left;
      }

      .p4 {
        display: none;
      }

      .p3 {
        font-weight: bold;
        font-size: 20px;
      }
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      margin: auto;
    }
    .cards {
      .card {
        height: 300px;
        .p1 {
          font-size: 20px;
          span {
            font-size: 30px;
          }
        }
        .p2 {
          font-size: 15px;
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .wrapper {
      margin: auto;
    }
  }
}
</style>
