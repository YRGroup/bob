<template>
  <div class="service">
    <div class="banner" :style="{backgroundImage:'url('+img+')'}">
      <!-- <bob-header :id="id" :homeHeader="false"></bob-header> -->
      <div class="service-navs">
        <div >
          <router-link :class="['item', {'active':id=='a'}]" to="/service/a">论</router-link>
          <router-link :class="['item', {'active':id=='b'}]" to="/service/b">划</router-link>
          <router-link :class="['item', {'active':id=='c'}]" to="/service/c">搞</router-link>
          <router-link :class="['item', {'active':id=='d'}]" to="/service/d">码</router-link>
          <router-link :class="['item', {'active':id=='e'}]" to="/service/e">纪</router-link>
          <router-link :class="['item', {'active':id=='f'}]" to="/service/f">造</router-link>
        </div>
        <span class="nav-btn" @click="toogleText"></span>
      </div>
      <div class="more" @click="toogleService">服务项目</div>
    </div>
    <transition name="opacity">
      <div class="text-wrapper" v-show="showText">
        <span class="nav-btn" @click="toogleText"></span>
        
        <transition name="poetry">
          <div class="cn" v-show="cn">
            <p>美丽的梦和美丽的诗一样</p>
            <p>都是可遇而不可求的</p>
            <p>常常在最没能料到的时刻里出现</p>
            <p>我喜欢那样的梦</p>
            <p>在梦里，一切都可以重新开始</p>
            <p>一切都可以慢慢解释</p>
            <p>心里甚至还能感觉到</p>
            <p>所有被浪费的时光</p>
          </div>
        </transition>
        <transition name="poetry">
          <div class="en" v-show="!cn">
            <p>Adolescence was brimming with </p>
            <p>transitions, secretions and hopelessness. </p>
            <p>My slow rite into adulthood is brimming with</p>
            <p>transitions, secretions and hopefulness.</p>
            <p>Nothing has really changed, yet everything is changing. </p>
            <p>I’m changing.</p>
            <p>Adolescence was brimming with </p>
            <p>transitions, secretions and hopelessness. </p>
          </div>
        </transition>
        
        <div class="changlang"><span @click="cn=true">zh</span> / <span @click="cn=false">en</span></div>
      </div>
    </transition>
    <transition name="opacity">
      <div class="text-wrapper" v-show="showService">
        <span class="nav-btn" @click="toogleService"></span>
        <div>
          <p>22222222222222222222222</p>
          <p>22222222222222222222222</p>
          <p>22222222222222222222222</p>
          <p>22222222222222222222222</p>
          <p>22222222222222222222222</p>
        </div>
      </div>
    </transition>
    <div class="container" ref="container"></div>
  </div>
</template>
<script>
import bobHeader from "@/components/bobHeader.vue";
// import * as THREE from "three";
// import * as TWEEN from "tween";
// console.log(THREE);
export default {
  name: "service",
  components: {
    bobHeader
  },
  data() {
    return {
      images: [
        require("@/images/A.png"),
        require("@/images/A.png"),
        require("@/images/A.png"),
        require("@/images/A.png"),
        require("@/images/A.png"),
        require("@/images/A.png")
      ],
      id: "",
      showText: false,
      showService: false,
      cn: true
    };
  },
  computed: {
    img() {
      let arr = ["a", "b", "c", "d", "e", "f"];
      let index = arr.indexOf(this.id);
      return this.images[index];
    }
  },
  created() {
    this.id = this.$route.params.id;

    if (!this.id) {
      this.$router.push("/");
    }
  },
  methods: {
    toogleText() {
      this.showText = !this.showText;
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
<style lang="less" scoped>
@import "../less/mixin.less";
@import "../less/common.less";
.service {
  // height: 100vh;
  position: relative;
  overflow: hidden;
  .service-navs {
    .flex();
    margin-top: 20px;
    justify-content: space-around;
    .item {
      font-size: 20px;
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 50%;
      border: 2px solid #fff;
      opacity: 0.8;
      color: #fff;
      margin-left: 20px;
      margin-right: 20px;
      &.active {
        opacity: 1;
        transform: scale(1.2);
        animation: nav 0.3s ease-in-out;
      }
      @keyframes nav {
        0% {
          transform: scale(1);
        }
      }
    }
  }
  .nav-btn {
    position: absolute;
    top: 30px;
    right: 40px;
  }
  .text-wrapper {
    position: absolute;
    background: @color-theme;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    color: #fff;
    .flex-column();
    justify-content: space-around;
    .en,
    .cn {
      line-height: 35px;
      position: relative;
      position: absolute;
      width: 100%;
    }
    .changlang {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 100px;
      cursor: pointer;
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
      margin-left: -85px;
      line-height: 40px;
      font-size: 16px;
      padding: 0 60px;
      border-radius: 20px;
      border: 1px solid #fff;
      color: #fff;
      transition: all 0.3s;
      &:hover {
        border: 1px solid @color-theme;
        color: @color-theme;
        background: #fff;
      }
    }
  }
  @media (max-width: 768px) {
    .service-navs {
      justify-content: flex-start;
      .item {
        display: block;
        margin-top: 20px;
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
.poetry-enter{
  opacity: 0;
  transform: translateX(150px);
}
.poetry-leave-to {
  opacity: 0;
  transform: translateX(-150px);
}
</style>
