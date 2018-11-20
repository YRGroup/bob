<template>
  <div class="case-page" v-if="caseList.length">
    <div class="casetitle">
      <h5 class="section-title">
        <span>案例展示 / <span class="en">case</span> </span>
      </h5>
    </div>

    <div  class="case-wrapper">
      <el-row class="case-list">
        <transition-group name="fadeBottom">
          <el-col v-for="item in caseList" :lg="8" :md="12" :sm="12" :xs="24" :key="item.id">
            <router-link class="case-item"  tag="div" :to="`/case/${item.id}`">
              <div class="overlay">
                <!-- <div class="border-hor"></div>
                <div class="border-ver"></div> -->
                <div class="text-box">
                  <div>
                    <p class="p1">{{item.title}}</p>
                    <p class="line"></p>
                    <p class="p2">{{item.tag}}</p>
                  </div>
                </div>
              </div>
              <div v-lazy:background-image="item.thumbnail" class="case-content" :style="{backgroundImage:`url(${item.thumbnail})`}">
              </div>
              <!-- <div class="case-title">
                <p class="p1">{{item.title}}</p>
                <p class="p2">{{item.tag}}</p>
              </div> -->
            </router-link>
          </el-col>
        </transition-group>
      </el-row>
      <el-row class="cases-footer">
        <div class="more"  v-if="more" @click="getMore">更多案例</div>
        <p class="foot" v-else>~ 没有更多了 ~</p>
      </el-row>
    </div>
    <!-- <div v-else>
      暂无案例
    </div> -->

  </div>
</template>

<script>
import API from "@/api/index";
import { getFirstImg } from "@/assets/utils";
import { info } from "@/assets/info";
import Case from "@/class/case";
export default {
  name: "home",
  components: {},
  data() {
    return {
      id: "",
      bannerList: {
        a: {
          bannerImg: require("@/images/3.jpg"),
          catId: 5
        },
        b: {
          bannerImg: require("@/images/cases/banner_B1.jpg"),
          catId: 6
        },
        c: {
          bannerImg: require("@/images/3.jpg"),
          catId: 10
        },
        d: {
          bannerImg: require("@/images/cases/banner_A1.jpg"),
          catId: 4
        },
        e: {
          bannerImg: require("@/images/cases/banner_E1.jpg"),
          catId: 7
        },
        f: {
          bannerImg: require("@/images/cases/banner_F1.jpg"),
          catId: 8
        }
      },
      caseList: [],
      currentPage: 1,
      more: true,
      showTag: false
    };
  },
  computed: {
    banner() {
      return this.bannerList[this.id].bannerImg;
    },
    casesName() {
      return info[this.id].name;
    },
    casesIntro() {
      return info[this.id].introduction;
    },
    caseTypes() {
      return info[this.id].items;
    },
    stickyCaseList() {
      let arr = [];
      this.caseList.forEach(el => {
        if (el.sticky) {
          arr.push(el);
        }
      });
      return arr;
    }
  },

  created() {
    this.id = this.$route.params.id;

    if (!this.id) {
      this.$router.push("/");
    }
    this.getData();
  },
  mounted() {
    // this.showTag = true;
    setTimeout(() => {
      this.showTag = true;
    }, 1000);
  },
  methods: {
    getData() {
      let id = this.bannerList[this.id].catId;
      API.getCatPosts(id, this.currentPage)
        .then(res => {
          res.data.forEach(el => {
            this.caseList.push(new Case(el));
          });
        })
        .catch(err => {
          console.log(err);
          this.more = false;
        });
    },
    getMore() {
      this.currentPage++;
      this.getData();
    },
    formatTags(string) {
      let arr = string.split("/");
      arr.pop();
      return arr.join(" / ");
    }
  },
  watch: {
    $route(to, from) {
      this.id = this.$route.params.id;
      if (!this.id) {
        this.$router.push("/");
      }
      this.currentPage = 1;
      this.caseList = [];
      this.more = true;
      this.getData();

      // setTimeout(() => {
      //   this.showTag = true;
      // }, 300);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../less/variable.less";
@import "../less/mixin.less";
@import "../css/animate.css";

.case-page {
  background: #fff;
  .banner-swiper {
    height: 800px;
    .swiper-slide {
      height: 100%;
      .background-cover();
      .content {
        height: 100%;
        .background-cover();
        // background-image: url("../images/3.jpg");
        .flex-column();
        .swiper-index {
          // height: 100%;
          padding: 0 0.5rem;
          color: #fff;
          .p1 {
            font-size: 0.8rem;
          }
          .p2 {
            font-size: 0.02rempx;
            line-height: 60px;
            opacity: 0.8;
          }
          .p3 {
            opacity: 0.6;
            height: 68px;
            p {
              display: inline-block;
              padding: 0 20px;
              // width: 100px;
              border-radius: 40px;
              line-height: 36px;
              border: 1px solid #fff;
              margin: 30px 10px 0;
              font-size: 0.11rem;
            }
          }
        }
        .swiper-case {
          width: 100%;
          height: 100%;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }

  // .section-title {
  //   // padding: 0.3rem 0;
  // }
  .case-wrapper {
    background: #f1f1f1;
    padding-top: 0.3rem;
    padding-bottom: 0.5rem;
  }
  .case-list {
    max-width: 1450px;
    margin: 0 auto;
    // margin-bottom: 0.5rem;
    @base: 0.85rem;
    .case-item {
      background: #fff;
      position: relative;
      margin: 10px auto;
      width: 4 * @base;
      cursor: pointer;
      border-radius: 0.03rem;
      overflow: hidden;
      transition: all 0.5s;
      // &:hover {
      //   box-shadow: 0 0 24px rgba(0, 0, 0, .1);
      //   transform: translateY(-5px);
      // }
      .overlay {
        width: 100%;
        height: 3 * @base;
        position: absolute;
        transition: all 0.5s;
        // display: block;
        .border-hor,
        .border-ver {
          position: absolute;
          top: 30px;
          left: 30px;
          bottom: 30px;
          right: 30px;
          transition: all 0.5s;
        }
        .border-hor {
          // border-top: 1px solid rgba(255, 255, 255, 0.8);
          // border-bottom: 1px solid rgba(255, 255, 255, 0.8);
          border-top: 2px solid @color-theme;
          border-bottom: 2px solid @color-theme;
          transform: scale(0, 1);
        }
        .border-ver {
          // border-left: 1px solid rgba(255, 255, 255, 0.8);
          border-left: 2px solid @color-theme;
          border-right: 2px solid @color-theme;
          // border-right: 1px solid rgba(255, 255, 255, 0.8);
          transform: scale(1, 0);
        }
        .text-box {
          position: absolute;
          // opacity: 0;
          // color: #fff;

          left: 0;
          bottom: 0;
          top: 0;
          right: 0;
          // padding-left: 50px;
          transition: all 0.5s;
          width: 100%;
          text-align: left;
          .flex-column();
          justify-content: space-around;
          .p1 {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #333;
            transform: translateX(100%);
            transition: all 0.5s;
            opacity: 0;
          }
          .line {
            border: 1px solid @color-theme;
            transform: translateX(200%);
            transition: all 0.5s;
            opacity: 0;
            width: 60px;
          }
          .p2 {
            font-size: 14px;
            // line-height: 30px;
            margin-top: 10px;
            color: #666;
            // opacity: 0.8;
            transform: translateX(50%);
            transition: all 0.5s;
            opacity: 0;
          }
        }
      }
      &:hover {
        .overlay {
          // background: rgba(0, 0, 0, 0.8);
          background: rgba(255, 255, 255, 0.9);
          .border-hor,
          .border-ver {
            transform: scale(1, 1);
          }
          .text-box {
            .p1,
            .p2,
            .line {
              transform: translateX(0);
              opacity: 1;
            }
          }
        }
      }
      .case-content {
        .background-cover();
        transition: all 0.5s;
        // background-size: 80% 80%;
        background-color: #ddd;
        height: 3 * @base;
      }
      .case-title {
        border: 1px solid #fff;
        box-sizing: border-box;
        text-align: left;
        padding: 25px 0 25px 20px;
        .p1 {
          color: #555;
          font-size: 15px;
          line-height: 30px;
          font-weight: bold;
        }
        .p2 {
          font-size: 12px;
          line-height: 30px;
          color: #aaa;
          height: 30px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .case-list {
      .case-item {
        width: 90%;
      }
    }
  }
}
.cases-footer {
  // padding-top: 0.5rem;
  margin-top: 0.5rem;
  text-align: center;
  .foot {
    color: #999;
    line-height: 50px;
    font-size: 15px;
  }
  .more {
    position: relative;
    cursor: pointer;
    padding: 0 20px;
    display: inline-block;
    line-height: 40px;
    font-size: 16px;
    width: 200px;
    border-radius: 5px;
    border: 1px solid #fff;
    color: @color-theme;
    transition: all 0.3s;
    z-index: 10;
    overflow: hidden;
    background: #fff;
    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      background-color: @color-theme;
      transform-origin: 50%;
      transition-property: transform;
      transition-duration: 0.3s;
      transition-timing-function: ease-out;
    }
    &:hover {
      // border: 1px solid @color-theme;
      color: @color-theme;
      // background: #fff;
      color: #fff;
      &::before {
        transform: scaleX(1);
      }
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
  transform: translateY(20px);
  opacity: 0.2;
}

.swiper-btn {
  position: absolute;
  bottom: 50%;
  z-index: 90;
  color: #fff;
  outline: none;
  padding: 0 20px;
  opacity: 0.7;
  cursor: pointer;
  .lines {
    height: 40px;
    position: relative;
    transition: transform 0.3s;
  }

  .tip {
    height: 2px;
    background: #fff;
    font-weight: bold;
    width: 0;
    transition: width 0.3s;
    margin: 0 10px;
  }

  .line {
    position: absolute;
    width: 2px;
    height: 20px;
    background: #fff;
    display: block;
    transition: all 0.3s;
  }

  .top-line {
    transform-origin: bottom;
    top: 0;
    left: 0;
  }

  .bottom-line {
    transform-origin: top;
    bottom: 0;
    left: 0;
  }

  &.prev-btn:hover {
    .lines {
      transform: translateX(-10px);
    }

    .tip {
      width: 20px;
    }

    .top-line {
      transform: rotateZ(45deg);
      // height: 60px;
    }

    .bottom-line {
      transform: rotateZ(-45deg);
      // height: 60px;
    }
  }

  &.next-btn:hover {
    .lines {
      transform: translateX(10px);
    }

    .tip {
      width: 20px;
    }

    .top-line {
      transform: rotateZ(-45deg);
    }

    .bottom-line {
      transform: rotateZ(45deg);
    }
  }
}

.prev-btn {
  left: 50px;
}

.next-btn {
  right: 50px;
}

.casetitle {
  background: #f1f1f1;
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  &::before {
    content: "";
    background: url("../images/caseBg.png") center center no-repeat;
    position: absolute;
    top: 60px;
    // left: 50%;
    width: 800px;
    height: 187px;
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-move {
  transition: all 1s;
}
@keyframes tag {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>
