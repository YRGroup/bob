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
                <p>品牌研究</p>
                <p>品牌研究</p>
                <p>品牌研究</p>
                <p>品牌研究</p>
              </div>
              <p class="p3">+</p>
            </div>
          </el-col>
          <el-col :lg="4" :sm="12" :xs="24" class="card">
            <div class="mask  flex flex-column">
              <p class="p1">
                <span>A</span>nalytice
              </p>
              <div class="p2">
                <p>品牌研究</p>
                <p>品牌研究</p>
                <p>品牌研究</p>
                <p>品牌研究</p>
              </div>
              <p class="p3">+</p>
            </div>
          </el-col>
          <el-col :lg="4" :sm="12" :xs="24" class="card">
            <div class="mask  flex flex-column">
              <p class="p1">
                <span>A</span>nalytice
              </p>
              <div class="p2">
                <p>品牌研究</p>
                <p>品牌研究</p>
                <p>品牌研究</p>
                <p>品牌研究</p>
              </div>
              <p class="p3">+</p>
            </div>
          </el-col>
          <el-col :lg="4" :sm="12" :xs="24" class="card">
            <div class="mask  flex flex-column">
              <p class="p1">
                <span>A</span>nalytice
              </p>
              <div class="p2">
                <p>品牌研究</p>
                <p>品牌研究</p>
                <p>品牌研究</p>
                <p>品牌研究</p>
              </div>
              <p class="p3">+</p>
            </div>
          </el-col>
          <el-col :lg="4" :sm="12" :xs="24" class="card">
            <div class="mask  flex flex-column">
              <p class="p1">
                <span>A</span>nalytice
              </p>
              <div class="p2">
                <p>品牌研究</p>
                <p>品牌研究</p>
                <p>品牌研究</p>
                <p>品牌研究</p>
              </div>
              <p class="p3">+</p>
            </div>
          </el-col>
          <el-col :lg="4" :sm="12" :xs="24" class="card">
            <div class="mask  flex flex-column">
              <p class="p1">
                <span>A</span>nalytice
              </p>
              <div class="p2">
                <p>品牌研究</p>
                <p>品牌研究</p>
                <p>品牌研究</p>
                <p>品牌研究</p>
              </div>
              <p class="p3">+</p>
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
      console.log(1)
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
  padding-top: 68px;
  padding-bottom: 80px;
  .wrapper {
    margin: 0 100px;
  }
  .section-title {
    margin-bottom: 60px;
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
        justify-content: space-around;
        height: 100%;
        transition: all 0.5s;
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
        font-size: 16px;
        line-height: 25px;
        color: #333;
        transition: all 0.3s;
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
  }
  @media (max-width: 1100px) {
    .wrapper {
      margin: auto;
    }
  }
}
</style>
