<template>
  <div class="team-page">
    <bob-header type="home"></bob-header>
    <div class="team-content">
      <!-- <people-card
        v-for="(item,index) in teamImg" 
        :key="index"
        :defaultImg="item.img1"
        :hoverImg="item.img2"
        :class="[index!=activeIndex&&hover?'disabled':'','people-card','people'+(index+1)]"
        @enter="enter(index)"
        @leave="leave"
        @click="showModal=true"
        >
      </people-card> -->
      <people-card
        v-for="(item,index) in team" 
        :key="index"
        :defaultImg="item.img1"
        :hoverImg="item.img2"
        :class="[index!=activeIndex&&hover?'disabled':'','people-card','people'+(index+1)]"
        @enter="enter(index)"
        @leave="leave"
        @click.native="showCardHandle(index)"
        >
      </people-card>
    </div>
    <bob-footer></bob-footer>
    <el-dialog
      custom-class="people-dialog"
      :show-close="false"
      :visible.sync="mydialog">
      <div class="people-info flex"
      :style="{background:currentPeople.color}">
        <div class="flex people-wrapper">
          <div>
            <img height="460px;" :src="currentPeople.avatar" :alt="currentPeople.name">
          </div>
          <div class="flex-column people-text">
            <p class="p1">{{currentPeople.name}}</p>
            <p class="p2">
              <span class="title">技能：</span><span>{{currentPeople.skill}}</span>
            </p>
            <p class="p3">
              <span class="title">经验：</span><span>{{currentPeople.exp}}</span>
            </p>
            <p class="p4">
              <span class="title">力量：</span>{{currentPeople.property.power}}
            </p>
            <p class="p5">
              <span class="title">智慧：</span>{{currentPeople.property.wisdom}}
            </p>
            <p class="p6"> 
              <span class="title">精神：</span>{{team[cardIndex].property.lang}}
            </p> 
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from "@/components/bobHeader.vue";
import bobFooter from "@/components/bobFooter.vue";
import peopleCard from "@/components/peopleCard.vue";
import API from "@/api/index";
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
      align-items: flex-start;
      .people-text {
        height: 100%;
        justify-content: flex-start;
        align-items: flex-start;
        color: #fff;
        text-align: left;
        margin-left: 100px;
        padding-top: 50px;
        font-size: 16px;
        line-height: 3;
        .p1{
          font-size: 30px;
          line-height: 3;
        }
        .title{
          opacity: .6;
          margin-right: 20px;
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
  background-image: url("../images/team/teamBg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  position: relative;

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

    &:nth-of-type(1) {
      left: 30%;
      bottom: @bottom2;
      margin-left: -86px;
    }
    &:nth-of-type(2) {
      left: 40%;
      bottom: @bottom2;
      margin-left: -56px;
    }
    &:nth-of-type(3) {
      left: 50%;
      bottom: @bottom2;
      margin-left: -76px;
    }
    &:nth-of-type(4) {
      right: 40%;
      bottom: @bottom2;
      margin-right: 66px;
    }
    &:nth-of-type(5) {
      right: 30%;
      bottom: @bottom2;
      margin-right: 66px;
    }

    &:nth-of-type(6) {
      left: 20%;
      bottom: @bottom;
      margin-left: 30px;
    }
    &:nth-of-type(7) {
      left: 30%;
      bottom: @bottom;
      margin-left: 20px;
    }
    &:nth-of-type(8) {
      left: 40%;
      bottom: @bottom;
      margin-left: -10px;
    }

    &:nth-of-type(9) {
      right: 50%;
      bottom: @bottom;
      margin-right: -6px;
    }
    &:nth-of-type(10) {
      right: 40%;
      bottom: @bottom;
      margin-right: -26px;
    }
    &:nth-of-type(11) {
      right: 30%;
      bottom: @bottom;
      margin-right: -56px;
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
