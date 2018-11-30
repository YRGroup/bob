<template>
  <div class="team-page">
    <bob-header class="team-header" type="home"></bob-header>

    <div class="team-content">
      <people-card
        v-for="(item,index) in team"
        :key="index"
        :defaultImg="item.img1"
        :hoverImg="item.img2"
        :class="[index!=activeIndex&&hover?'disabled':'','people-card','people'+(index+1)]"
        @enter="enter(index)"
        @leave="leave"
        @click.native="showCardHandle(index)"
      ></people-card>
      <div class="top-img">
        <img src="../images/team_1.png" alt>
      </div>
    </div>
    <bob-footer></bob-footer>
    <el-dialog custom-class="people-dialog" :show-close="false" :visible.sync="mydialog">
      <people-info :curentIndex="curentIndex"></people-info>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from "@/components/bobHeader.vue";
import bobFooter from "@/components/bobFooter.vue";
import peopleCard from "@/components/peopleCard.vue";
import peopleInfo from "@/components/peopleInfo.vue";
// import API from '@/api/index'
import team from "@/assets/team";

let lazyImg = require("@/images/nodata.jpg");

export default {
  name: "team",
  components: {
    bobHeader,
    bobFooter,
    peopleCard,
    peopleInfo
  },
  data() {
    return {
      team: team,
      activeIndex: 0,
      hover: false,
      mydialog: false,
      curentIndex: 0
    };
  },
  created() {},
  mounted() {},
  methods: {
    enter(index) {
      this.hover = true;
      this.activeIndex = index;
    },
    leave() {
      this.hover = false;
    },
    showCardHandle(index) {
      this.mydialog = true;
      this.curentIndex = index;
    }
  }
};
</script>
<style lang="less" >
@import "../less/variable.less";
@import "../less/mixin.less";

.team-page {
  position: relative;
  .people-dialog {
    width: 90%;
    max-width: 1000px;
    .el-dialog__header {
      display: none;
    }
    .el-dialog__body {
      padding: 0;
    }
  }
}
.team-header {
  background: hsla(0, 0%, 39.2%, 0.8);
}
.team-content {
  height: 1000px;
  // background: #fff;
  // width: 1300px;
  background-image: url("../images/teamBg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  position: relative;
  .top-img {
    padding-top: 100px;
  }
  .people-card {
    position: absolute;
    transition: all 0.5s;
    z-index: 2;
    &.disabled {
      opacity: 0.5;
      filter: blur(5px);
      z-index: 1;
    }
    @bottom: 550px;
    @bottom2: @bottom+150px;
    @offset: 220px;
    &:nth-of-type(1) {
      left: 50%;
      bottom: @bottom2;
      margin-left: -2 * @offset - 50px;
    }
    &:nth-of-type(2) {
      left: 50%;
      bottom: @bottom2;
      margin-left: -@offset - 50px;
    }
    &:nth-of-type(3) {
      left: 50%;
      bottom: @bottom2;
      margin-left: -@offset / 2;
    }
    &:nth-of-type(4) {
      right: 50%;
      bottom: @bottom2;
      margin-right: -@offset / 2 + 40px;
    }
    &:nth-of-type(5) {
      right: 50%;
      bottom: @bottom2;
      margin-right: -@offset - 40px;
    }

    &:nth-of-type(6) {
      left: 50%;
      bottom: @bottom;
      margin-left: -3 * @offset + 120px;
    }
    &:nth-of-type(7) {
      left: 50%;
      bottom: @bottom;
      margin-left: -2 * @offset + 60px;
    }
    &:nth-of-type(8) {
      left: 50%;
      bottom: @bottom;
      margin-left: -@offset;
    }

    &:nth-of-type(9) {
      right: 50%;
      bottom: @bottom;
      margin-right: 20px;
    }
    &:nth-of-type(10) {
      right: 50%;
      bottom: @bottom;
      margin-right: -@offset + 50px;
    }
    &:nth-of-type(11) {
      right: 50%;
      bottom: @bottom;
      margin-right: -@offset*2 + 50px;
    }
  }
}

.fadeBottom-enter-active,
.fadeBottom-leave-active {
  transition: all 0.5s;
  // transform: translateX(0);
}

.fadeBottom-enter,
.fadeBottom-leave-to {
  transform: translateY(50%);
  opacity: 0;
}
</style>
