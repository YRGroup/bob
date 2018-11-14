<template>
  <div class="case-page">
    <bob-header></bob-header>

    <swiper class="banner-swiper" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide">
        <div class="content" :style="{backgroundImage:`url(${banner})`}">
          <div class="swiper-index">
            <h3 class="p1">{{casesName}}</h3>
            <p class="p2">{{casesIntro}}</p>
            <p class="p3" v-html="caseTypes">
              <!-- <span >微信平台解决方案</span>
              <span >微信平台解决方案</span>
              <span >微信平台解决方案</span>
              <span >微信平台解决方案</span>
              <span >微信平台解决方案</span>
              <span >微信平台解决方案</span> -->
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide v-for="item in stickyCaseList" :key="item.id" class="swiper-slide" :style="{backgroundImage:`url(${item.banner})`}">
        <div class="content" >
          <router-link class="swiper-case"  tag="div" :to="`/case/${item.id}`">
            <!-- <div class="case-content" :style="{backgroundImage:`url(${item.thumbnailurl})`}">
            </div>
            <div class="case-title">
              <p class="p1">{{item.title.rendered}}</p>
              <p class="p2">{{formatTags(item.tags)}}</p>
            </div> -->
          </router-link>
        </div>
      </swiper-slide>
      <!--左箭头-->
      <div class="prev-btn swiper-btn flex" slot="button-prev">
        <div class="lines">
          <span class="top-line line"></span>
          <span class="bottom-line line"></span>
        </div>
        <p class="tip"></p>
      </div>
      <!--右箭头-->
      <div class="next-btn swiper-btn flex" slot="button-next">
        <p class="tip"></p>
        <div class="lines">
          <span class="top-line line"></span>
          <span class="bottom-line line"></span>
        </div>
      </div>
    </swiper>

    <div>
      <h5 class="section-title">
        <span>案例展示 / <span class="en">case</span> </span>
      </h5>
    </div>

    <div v-if="caseList.length" class="case-wrapper">
      <el-row class="case-list">
        <transition-group name="fadeBottom">
          <el-col v-for="item in caseList" :lg="8" :md="12" :sm="12" :xs="24" :key="item.id">
            <router-link class="case-item"  tag="div" :to="`/case/${item.id}`">
              <div class="case-content" :style="{backgroundImage:`url(${item.thumbnailurl})`}">
              </div>
              <div class="case-title">
                <p class="p1">{{item.title.rendered}}</p>
                <p class="p2">{{formatTags(item.tags)}}</p>
              </div>
            </router-link>
          </el-col>
        </transition-group>
      </el-row>
      <el-row class="cases-footer">
        <el-button v-if="more" @click="getMore">更多案例</el-button>
        <p class="foot" v-else>-- 没有更多了 --</p>
      </el-row>
    </div>
    <bob-footer></bob-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import { swiper, swiperSlide } from "vue-awesome-swiper";
import bobHeader from "@/components/bobHeader.vue";
import bobFooter from "@/components/bobFooter.vue";
import API from "@/api/index";
import { getFirstImg } from "@/assets/utils";
import { info } from "@/assets/info";
export default {
  name: "home",
  components: {
    bobHeader,
    bobFooter,
    swiper,
    swiperSlide
  },
  data() {
    return {
      id: "",
      swiperOption: {
        autoplay: true,

        // simulateTouch: false, // 禁止鼠标模拟
        // effect: 'fade',
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: ".next-btn",
          prevEl: ".prev-btn"
        }
      },
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
          bannerImg: require("@/images/3.jpg"),
          catId: 8
        }
      },
      caseList: [],
      currentPage: 1,
      more: true
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
  methods: {
    getData() {
      let id = this.bannerList[this.id].catId;

      API.getCatPosts(id, this.currentPage)
        .then(res => {
          console.log(res);
          // console.log(getFirstImg(res.data[4].content.rendered));
          this.caseList = this.caseList.concat(res.data);
          // this.caseList = this.caseList.concat(this.caseList);
        })
        .catch(err => {
          // console.log(err);
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
  }
};
</script>
<style lang="less" >
@import "../less/variable.less";
@import "../less/mixin.less";

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
            font-size: 15px;
            line-height: 60px;
            opacity: 0.8;
          }
          .p3 {
            opacity: 0.6;
            p {
              display: inline-block;
              padding: 0 20px;
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

  .section-title {
    padding: 0.3rem 0;
  }
  .case-wrapper {
    background: #f1f1f1;
    padding-top: 0.3rem;
  }
  .case-list {
    max-width: 1450px;
    margin: 0 auto;
    // margin-bottom: 0.5rem;
    @base: 0.85rem;
    .case-item {
      background: #fff;
      margin: 10px auto;
      width: 4 * @base;
      cursor: pointer;
      border-radius: 0.03rem;
      overflow: hidden;
      .case-content {
        .background-cover();
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
  padding: 30px 0;
  .foot {
    color: #666;
    line-height: 50px;
    font-size: 15px;
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
</style>
