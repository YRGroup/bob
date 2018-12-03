<template>
  <div class="nbd-page">
    <bob-header type="home"></bob-header>
    <div class="nbd-banner flex-column">
      <p class="p1">新品牌策划方案</p>
      <div class="bg">
        <img src="../images/about_bg2.jpg">
      </div>
    </div>
    <div class="section2">
      <p>11111111111111</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from "@/components/bobHeader.vue";
import bobFooter from "@/components/bobFooter.vue";
import peopleCard from "@/components/peopleCard.vue";
// import API from '@/api/index'
import team from "@/assets/team";

let lazyImg = require("@/images/nodata.jpg");

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
  mounted() {},
  methods: {}
};
</script>
<style lang="less" >
@import "../less/variable.less";
@import "../less/mixin.less";
.nbd-page {
  .nbd-banner {
    height: 800px;
    background: #ddd;
    position: relative;
    overflow: hidden;
    color: #fff;
    justify-content: space-around;
    overflow: hidden;
    .p1 {
      font-size: 0.4rem;
      position: fixed;
      top: 0;
      width: 100%;
      height: 800px;
    }
    .bg {
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        position: fixed;
        top: 0;
        left: 0;
        height: 800px;
        width: 100%;
        object-fit:cover;
      }
    }
  }
  .section2 {
    height: 800px;
    z-index: 5;
  }
}
</style>
