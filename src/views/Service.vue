<template>
  <div class="service">
    <div class="banner" >
      <div class="com-wrapper">
        <transition name="page">
          <component :is="banner"></component>
        </transition>
      </div>
      <router-link to="/" class="logo">
        <img class="logo1" src="../images/logo.png" alt="logo">
        <img class="logo2" src="../images/logoS.png" alt="logo">
      </router-link>
      <div class="service-navs">
        <div>
          <router-link :class="['item', {'active':id=='a'}]" to="/service/a">论</router-link>
          <router-link :class="['item', {'active':id=='b'}]" to="/service/b">划</router-link>
          <router-link :class="['item', {'active':id=='c'}]" to="/service/c">搞</router-link>
          <router-link :class="['item', {'active':id=='d'}]" to="/service/d">码</router-link>
          <router-link :class="['item', {'active':id=='e'}]" to="/service/e">纪</router-link>
          <router-link :class="['item', {'active':id=='f'}]" to="/service/f">造</router-link>
        </div>
        <!-- <span class="nav-btn" @click="toogleText"></span> -->
      </div>
      <div class="more" @click="toogleText">B我们</div>
    </div>
    <transition name="opacity">
      <div class="text-wrapper" v-show="showText">
        <span class="nav-btn" @click="toogleText"></span>

        <transition name="poetry">
          <div class="cn" v-show="cn" v-html="poetry">
          </div>
        </transition>
        <transition name="poetry">
          <div class="en" v-show="!cn" v-html="items">

          </div>
        </transition>
        <div class="changlang">
          <span @click="cn=true" :class="[{'active':cn}]">B一下</span>
          <span> / </span>
          <span @click="cn=false" :class="[{'active':!cn}]">再B一下</span></div>
      </div>
    </transition>
    <div class="container" ref="container"></div>
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
    bannerf
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
    },
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
.logo {
  display: inline-block;
  height: 40px;
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 10;
  img {
    height: 100%;
  }
  .logo2 {
    display: none;
  }

  @media (max-width: 760px) {
    height: 25px;

    .logo1 {
      display: none;
    }

    .logo2 {
      display: block;
    }
  }
}
.service {
  // height: 100vh;
  position: relative;
  overflow: hidden;
  .com-wrapper {
    height: 100%;
  }
  .service-navs {
    z-index: 10;
    .flex();
    position: absolute;
    top: 20px;
    width: 100%;
    justify-content: space-around;
    .item {
      font-size: 18px;
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      border-radius: 50%;
      border: 2px solid #fff;
      opacity: 0.7;
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
      .active {
        transition: all 0.5s;
        font-size: 30px;
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
      margin-left: -85px;
      line-height: 40px;
      font-size: 16px;
      padding: 0 60px;
      border-radius: 20px;
      border: 1px solid #fff;
      color: #fff;
      transition: all 0.3s;
      z-index: 10;
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
      margin-top: 60px;
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
.poetry-enter {
  opacity: 0;
  transform: translateX(150px);
}
.poetry-leave-to {
  opacity: 0;
  transform: translateX(-150px);
}
</style>
