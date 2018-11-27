<template>
  <div class="team-page">
    <el-row class="item-row"> 
      <el-col :span="12" class="card">
        <img src="" alt="">  
      </el-col>
      <el-col :span="12" class="card">
        <img src="" alt="">  
      </el-col>
    </el-row>
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
  name: "team",
  components: {
    bobHeader,
    bobFooter,
    peopleCard
  },
  data() {
    return {
      team: team,
      activeIndex: 0,
      hover: false,
      showModal: false,
      mydialog: false,
      cardIndex: 0
    };
  },
  computed: {
    currentPeople() {
      return this.team[this.cardIndex];
    }
  },

  created() {
    this.getTeamList();
  },
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
      this.cardIndex = index;
    },
    getTeamList() {
      let teamId = 500;
      // API.getXcById(teamId).then(res => {
      //   console.log(res);
      // });
    }
  }
};
</script>
<style lang="less" >
@import "../less/variable.less";
@import "../less/mixin.less";

.people-dialog {
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    padding: 0;
  }
  .people-info {
    width: 1000px;
    height: 500px;
    background: #aaa;
    z-index: 90;
    justify-content: space-around;
    .people-wrapper {
      justify-content: space-around;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
      height: 100%;
      .peoplePic {
        height: 85%;
        img {
          height: 100%;
        }
      }
      .people-text {
        height: 100%;
        justify-content: flex-start;
        align-items: flex-start;
        color: #fff;
        text-align: left;
        margin-left: 60px;
        // padding-top: 50px;
        font-size: 16px;
        line-height: 3;
        width: 450px;
        .p {
          // .flex();
          // justify-content: flex-start;
          width: 100%;
        }
        .title {
          opacity: 0.6;
          margin-right: 10px;
          width: 50px;
        }
        .p1 {
          font-size: 30px;
          line-height: 3;
        }
        .progress {
          width: 200px;
          display: inline-block;
          .el-progress__text {
            display: none;
          }
        }
      }
    }
  }
}
.team-page {
  position: relative;
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
