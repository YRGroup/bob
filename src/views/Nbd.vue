<template>
  <div class="nbd-page">
    <bob-header type="home"></bob-header>
    <div class="nbd-banner flex-column">
      <p class="p1 wow bounceInUp" data-wow-duration="1s">
        <img src="../images/nbd/nbd1.png" alt>
      </p>
    </div>
    <div class="section2">
      <h5>品牌全案服务流程</h5>
      <div class="content">
        <p class="wow bounceInUp" data-wow-duration="1s">
          <img src="../images/nbd/A.png" alt>
        </p>
        <p class="wow bounceInUp" data-wow-duration="1s">
          <img src="../images/nbd/line.png" alt>
        </p>
        <div class="flex">
          <p class="wow bounceInUp" data-wow-duration="1s" data-wow-delay=".3s">
            <img src="../images/nbd/B.png" alt>
          </p>
          <p class="wow bounceInUp" data-wow-duration="1s" data-wow-delay=".4s">
            <img src="../images/nbd/C.png" alt>
          </p>
          <p class="wow bounceInUp" data-wow-duration="1s" data-wow-delay=".5s">
            <img src="../images/nbd/D.png" alt>
          </p>
          <p class="flex-column wow bounceInUp lsr" data-wow-duration=".6" data-wow-delay="1.2s">
            <img src="../images/nbd/lrs1.png" alt>
            <img src="../images/nbd/lrs1.png" alt>
            <img src="../images/nbd/lrs1.png" alt>
          </p>
        </div>
        <div class="flex" style="justify-content: flex-start;">
          <p class="wow bounceInUp" data-wow-duration="1s">
            <img src="../images/nbd/line1.png" alt>
          </p>
        </div>
        <div class="flex">
          <p class="wow bounceInUp" data-wow-duration="1s">
            <img src="../images/nbd/F.png" alt>
          </p>
          <p class="wow bounceInUp" data-wow-duration="1s">
            <img src="../images/nbd/E.png" alt>
          </p>
          <p style="visibility:hidden;">
            <img src="../images/nbd/E.png" alt>
          </p>
          <p style="visibility:hidden;">
            <img src="../images/nbd/E.png" alt>
          </p>
        </div>
      </div>
    </div>
    <div class="section3">
      <h5>专业定制一体化综合方案</h5>
      <div class="content">
        <p class="wow bounceInUp" data-wow-duration="1s">
          <img src="../images/nbd/pic1.png" alt>
        </p>
        <p style="margin-top:20px;" class="wow bounceInUp" data-wow-duration="1s">
          <img src="../images/nbd/333.png" alt>
        </p>
      </div>
    </div>
    <bob-footer></bob-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from "@/components/bobHeader.vue";
import bobFooter from "@/components/bobFooter.vue";
import peopleCard from "@/components/peopleCard.vue";
// import API from '@/api/index'
import team from "@/assets/team";
import { WOW } from "wowjs";

export default {
  name: "nbd",
  components: {
    bobHeader,
    bobFooter,
    peopleCard
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    new WOW().init();
  },
  methods: {}
};
</script>
<style lang="less" >
@import "../less/variable.less";
@import "../less/mixin.less";
.nbd-page {
  background: #fff;
  .nbd-banner {
    height: 620px;
    background: #ddd;
    position: relative;
    overflow: hidden;
    color: #fff;
    justify-content: space-around;
    overflow: hidden;
    background: url("../images/nbd/banner.png") no-repeat;
  }
  .section2 {
    padding: 60px 0;
    overflow: hidden;
    h5 {
      font-size: 0.3rem;
      margin-bottom: 60px;
    }
    .content {
      width: 1136px;
      margin: 0 auto;
      .lsr {
        img {
          margin-bottom: 10px;
        }
      }
    }
  }
  .section3 {
    padding: 60px 0;
    background: @color-theme;
    overflow: hidden;
    h5 {
      font-size: 0.3rem;
      margin-bottom: 60px;
      color: #fff;
    }
    .content {
    }
  }
}
</style>
