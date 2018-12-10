<template>
  <div>
    <div class="people-info flex" :style="{background:currentPeople.color}">
      <div class="people-wrapper">
        <div class="peoplePic">
          <img :src="currentPeople.avatar" :alt="currentPeople.name">
        </div>
        <div class="flex-column people-text">
          <p class="p1">
            <span class="span1">{{currentPeople.name}}</span>
            <span class="span2">{{currentPeople.skill}}</span>
          </p>
          <p class="p3 p">
            <span class="title">EXP：</span>
            <span>{{currentPeople.exp}}</span>
          </p>
          <p class="p4 p" v-for="(val, name) in currentPeople.property">
            <span class="title">{{name}}：</span>
            <el-progress class="progress" :stroke-width="8" color="#e9db02" :percentage="val"></el-progress>
          </p>
          <!-- <p class="p6 p">
            <span class="title">格言：</span>
            <span>{{currentPeople.motto}}</span>
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import team from '@/assets/team'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    curentIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      team: team
    }
  },
  computed: {
    currentPeople () {
      return this.team[this.curentIndex]
    }
  },
  created () {},
  methods: {}
}
</script>
<style lang="less">
@import "../less/variable.less";
@import "../less/mixin.less";

.people-info {
  // height: 500px;
  background: #aaa;
  z-index: 90;
  justify-content: flex-start;
  .people-wrapper {
    .flex();
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px;
    box-sizing: border-box;
    height: 100%;
    .peoplePic {
      width: 400px;
      height: 400px;
      img {
        // height: 400px;
        max-width: 100%;
        max-height: 100%;
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
      line-height: 2.5;
      // width: 450px;
      .p {
        // .flex();
        // justify-content: flex-start;
        width: 100%;
      }
      .title {
        opacity: 0.6;
        // margin-right: 10px;
        display: inline-block;
        width: 70px;
      }
      .p1 {
        .span1 {
          font-size: 0.23rem;
          margin-right: 10px;
        }
        .span2 {
          color: #ddd;
        }
      }
      .progress {
        width: 1.5rem;
        display: inline-block;
        .el-progress__text {
          display: none;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .people-wrapper {
      .flex-column();
      align-items: flex-start;
      .people-text {
        margin-left: 10px;
        line-height: 2.5;
        .p1 {
          .span1 {
            font-size: 0.3rem;
            margin-right: 10px;
            display: block;
          }
          .span2 {
            color: #ddd;
          }
        }
        .progress {
          width: 2.5rem;
        }
      }
      .peoplePic {
        display: none;
        // width: 200px;
      }
    }
  }
}
</style>
