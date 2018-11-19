<template>
  <div class="service">
    <bob-header type="service" :id="id"></bob-header>
    <div class="banner" >
      <div class="com-wrapper">
        <transition name="page">
          <component :is="banner"></component>
        </transition>
      </div>
      <div class="partic" id="partic">
        <vue-particles style="height:100%;"
        color="#fff"
        :particleOpacity="0.2"
        :particlesNumber="4"
        shapeType="circle"
        :particleSize="50"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="1"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push">
        </vue-particles>
      </div>
      <div class="more animated fadeInUp" @click="toogleText">B 我 们</div>
      <div class="scroll-icon">
        <img  src="../images/icon-1.png" alt="">
      </div>
    </div>
    <transition name="opacity">
      <div class="text-wrapper" v-show="showText">
        <span class="nav-btn" @click="toogleText">
          <span class="btnImg"></span>
        </span>
        <div class="content">
          <transition name="poetry">
            <div class="left-con text" v-show="cn" >
              <div  v-html="poetry">

              </div>
            </div>
          </transition>
          <transition name="poetry">
            <div class="right-con text" v-show="!cn" >
              <div>
                <p v-for="(item ,index) in items" :key="index">
                  {{item}}
                </p>
              </div>
            </div>
          </transition>
        </div>
        <div class="changlang">
          <span @click="cn=true" :class="[{'active':cn},'btn','btn1']"></span>
          <span @click="cn=false" :class="[{'active':!cn},'btn','btn2']"></span>
        </div>
      </div>
    </transition>
    <case-list></case-list>
    <!-- <div class="container" ref="container"></div> -->
    <bob-footer></bob-footer>
  </div>
</template>
<script>
import { info } from "@/assets/info";
import bannera from "@/components/bannera/index.vue";
import bannerb from "@/components/bannerb/index.vue";
import bannerc from "@/components/bannerc/index.vue";
import bannerd from "@/components/bannerd/index.vue";
import bannere from "@/components/bannere/index.vue";
import bannerf from "@/components/bannerf/index.vue";
import bobHeader from "@/components/bobHeader.vue";
import caseList from "@/components/caseList.vue";
import bobFooter from "@/components/bobFooter.vue";
// import * as THREE from "three";
// import * as TWEEN from "tween";
// console.log(THREE);

export default {
  name: "service",
  components: {
    bannera,
    bannerb,
    bannerc,
    bannerd,
    bannere,
    bannerf,
    bobHeader,
    caseList,
    bobFooter
  },
  data() {
    return {
      id: "",
      showText: false,
      showService: false,
      cn: true
    };
  },
  computed: {
    poetry() {
      return info[this.id]["poetry"];
    },
    items() {
      return info[this.id]["items"];
    },
    banner() {
      return "banner" + this.id;
    }
  },
  created() {
    this.id = this.$route.params.id;

    if (!this.id) {
      this.$router.push("/");
    }
  },
  mounted() {},
  methods: {
    toogleText() {
      this.showText = !this.showText;
      this.timer = setTimeout(() => {
        this.cn = true;
      }, 500);
    },
    toogleService() {
      this.showService = !this.showService;
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id;
    next();
  }
};
</script>
<style lang="less" >
@import "../less/mixin.less";
@import "../less/common.less";
@import "../css/animate.css";
.scroll-icon {
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 25px;
  left: 50%;
  margin-left: -20px;
  animation: scrollIcon 3s ease infinite;
}
.partic {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 10;
}
.service {
  // height: 100vh;
  position: relative;
  // overflow: hidden;
  .com-wrapper {
    height: 100%;
  }

  .nav-btn {
    position: absolute;
    top: 30px;
    right: 40px;
  }
  .text-wrapper {
    position: fixed;
    background: @color-theme;
    top: 0;
    // bottom: 0;
    left: 0;
    // right: 0;
    height: 100vh;
    width: 100%;
    z-index: 99;
    color: #fff;
    .flex-column();
    justify-content: space-around;
    .content {
      position: absolute;
      top: 50px;
      bottom: 100px;
      width: 100%;

      // overflow: auto;
      .text {
        position: absolute;
        padding: 0 10px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: auto;
        .flex-column();
        justify-content: space-around;
        &.left-con {
          line-height: 35px;
          font-size: 18px;
          h2 {
            margin-bottom: 30px;
          }
        }
        &.right-con {
          font-size: 28px;
          line-height: 52px;
        }
      }
    }
    .nav-btn {
      z-index: 101;
      top: 20px;
      right: 20px;
      .btnImg {
        &:hover {
          background-image: url("../images/navBtn.png");
        }
      }
    }

    .changlang {
      position: absolute;
      bottom: 30px;
      cursor: pointer;
      &:hover {
        background: none;
      }
      // button {
      //   background: none;
      //   outline: none;
      //   border: none;
      //   color: #fff;
      //   transition: all 0.3s;
      //   line-height: 30px;
      //   padding: 5px;
      //   cursor: pointer;
      // }
      .btn {
        width: 60px;
        height: 30px;
        display: inline-block;
        margin: 0 20px;
        background: no-repeat center center;
        background-size: 100% auto;
        transition: all 0.3s;
        cursor: pointer;
      }
      .btn1 {
        background-image: url("../images/B下.png");
      }
      .btn2 {
        background-image: url("../images/BB下.png");
      }
      .active {
        // font-size: 20px;
        transform: scale(2);
        // background-image: url("../images/BB.png");
        // opacity: 0.8;
      }
    }
  }
  .banner {
    .background-cover();
    height: 100vh;
    overflow: hidden;
    position: relative;
    .more {
      cursor: pointer;
      position: absolute;
      bottom: 10%;
      left: 50%;
      margin-left: -100px;
      line-height: 40px;
      font-size: 16px;
      width: 200px;
      border-radius: 5px;
      border: 1px solid #fff;
      color: #fff;
      transition: all 0.3s;
      z-index: 10;
      overflow: hidden;
      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: scaleX(0);
        background-color: #fff;
        transform-origin: 50%;
        transition-property: transform;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
      }
      &:hover {
        // border: 1px solid @color-theme;
        color: @color-theme;
        // background: #fff;
        &::before {
          transform: scaleX(1);
        }
      }
    }
  }
  @media (max-width: 768px) {
    .text-wrapper {
      .content {
        .text {
          &.left-con {
            line-height: 30px;
            font-size: 16px;
            justify-content: flex-start;
            padding-top: 50px;
          }
          &.right-con {
            font-size: 25px;
            line-height: 45px;
            justify-content: space-around;
          }
        }
      }
    }
  }
}

.opacity-enter-active,
.opacity-leave-active {
  transition: all 0.5s;
}
.opacity-enter,
.opacity-leave-to {
  opacity: 0;
}
.poetry-enter-active,
.poetry-leave-active {
  transition: all 0.5s;
}
.poetry-enter {
  opacity: 0;
  transform: translateX(150px);
}
.poetry-leave-to {
  opacity: 0;
  transform: translateX(-150px);
}
@keyframes scrollIcon {
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
