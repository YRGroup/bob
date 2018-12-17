<template>
  <div class="home">
    <bob-header type="home"></bob-header>
    <bob-banner></bob-banner>
    <bob-service></bob-service>
    <bob-aboutus></bob-aboutus>
    <!-- <bob-team></bob-team> -->
    <bob-data></bob-data>
    <router-link to="/nbd" tag="div">
      <div class="nbd">
        <p class="p1 wow bounceInDown" data-wow-duration="1s">
          <img src="../images/nbd/nbd1.png" alt>
        </p>
        <bob-star></bob-star>
      </div>
    </router-link>
    <bob-team></bob-team>
    <bob-footer></bob-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from "@/components/bobHeader.vue";
import bobBanner from "@/components/bobBanner.vue";
import bobService from "@/components/bobService.vue";
import bobAboutus from "@/components/bobAboutus.vue";
import bobData from "@/components/bobData.vue";
import bobFooter from "@/components/bobFooter.vue";
import bobTeam from "@/components/bobTeam.vue";
import bobStar from "@/components/bobStar.vue";
import { WOW } from "wowjs";

export default {
  name: "home",
  components: {
    bobHeader,
    bobBanner,
    bobService,
    bobAboutus,
    bobData,
    bobTeam,
    bobStar,
    bobFooter
  },
  created() {},
  methods: {},
  mounted() {
    new WOW().init();
  }
};
</script>
<style lang="less" scoped>
@import "../less/mixin.less";
.home {
  position: relative;
  background: #fff;
}
.nbd {
  position: relative;
  height: 3rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .p1 {
    position: absolute;
    z-index: 20;
    img {
      width: 2rem;
    }
  }
}
</style>
