<template>
  <div class="nbd-page">
    <bob-header type="home"></bob-header>
    <div class="nbd-banner flex-column">
      <p class="p1 wow bounceInDown" data-wow-duration="1s">
        <img src="../images/nbd/nbd1.png" alt>
      </p>
    </div>
    <!-- <div class="section2">
      <h5>品牌全案服务流程</h5>
      <div class="content">
        <p class="wow bounceInUp" data-wow-duration="1s">
          <img src="../images/nbd/A.png" alt>
        </p>
        <p class="wow bounceInUp" data-wow-duration="1s">
          <img src="../images/nbd/line.png" alt>
        </p>
        <div class="flex">
          <p class="wow bounceInUp" data-wow-duration="1s" >
            <img src="../images/nbd/B.png" alt>
          </p>
          <p class="wow bounceInUp" data-wow-duration="1s">
            <img src="../images/nbd/C.png" alt>
          </p>
          <p class="wow bounceInUp" data-wow-duration="1s" >
            <img src="../images/nbd/D.png" alt>
          </p>
          <p 
          class="flex-column wow bounceInUp lsr" 
          data-wow-duration="1s">
            <img src="../images/nbd/lrs1.png" alt>
            <img src="../images/nbd/lrs1.png" alt>
            <img src="../images/nbd/lrs1.png" alt>
          </p>
        </div>
        <div class="flex" style="justify-content: flex-start;">
          <p class="wow bounceInUp" data-wow-duration="1s" data-wow-delay="1s">
            <img src="../images/nbd/line1.png" alt>
          </p>
        </div>
        <div class="flex">
          <p class="wow bounceInUp" data-wow-duration="1s" data-wow-delay="1s">
            <img src="../images/nbd/F.png" alt>
          </p>
          <p class="wow bounceInUp" data-wow-duration="1s" data-wow-delay="1s">
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
    </div>-->
    <div class="section2">
      <div class="content flex">
        <div class="item" v-for="(item, index) in nbd" :key="index">
          <nbd-item :item="item"></nbd-item>
        </div>
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
import nbdItem from "@/components/nbdItem.vue";
// import API from '@/api/index'
import nbd from "@/assets/nbd";
import { WOW } from "wowjs";

export default {
  name: "nbd",
  components: {
    bobHeader,
    bobFooter,
    peopleCard,
    nbdItem
  },
  data() {
    return {
      nbd: nbd
    };
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
    height: 400px;
    .content {
      width: 1200px;
      margin: 0 auto;
      align-items: flex-start;
      .item{
        &:first-child{
          .arrow{
            display: none;
          }
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
      width: 1250px;
    }
  }
}
@keyframes bounceInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(100px);
  }

  50% {
    opacity: 1;
    -webkit-transform: translateY(-30px);
  }

  75% {
    -webkit-transform: translateY(10px);
  }

  100% {
    -webkit-transform: translateY(0);
  }
}
</style>
