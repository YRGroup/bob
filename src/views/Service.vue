<template>
  <div class="service">
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
              <div v-html="items">

              </div>
            </div>
          </transition>
        </div>
        <div class="changlang">
          <button @click="cn=true" :class="[{'active':cn}]">B一下</button>
          <span> / </span>
          <button @click="cn=false" :class="[{'active':!cn}]">再B一下</button>
        </div>
      </div>
    </transition>
    <!-- <div class="container" ref="container"></div> -->
  </div>
</template>
<script>
import { info } from '@/assets/info'
import bannera from '@/components/bannera/index.vue'
import bannerb from '@/components/bannerb/index.vue'
import bannerc from '@/components/bannerc/index.vue'
import bannerd from '@/components/bannerd/index.vue'
import bannere from '@/components/bannere/index.vue'
import bannerf from '@/components/bannerf/index.vue'
// import * as THREE from "three";
// import * as TWEEN from "tween";
// console.log(THREE);

export default {
  name: 'service',
  components: {
    bannera,
    bannerb,
    bannerc,
    bannerd,
    bannere,
    bannerf
  },
  data () {
    return {
      id: '',
      showText: false,
      showService: false,
      cn: true
    }
  },
  computed: {
    poetry () {
      return info[this.id]['poetry']
    },
    items () {
      return info[this.id]['items']
    },
    banner () {
      return 'banner' + this.id
    }
  },
  created () {
    this.id = this.$route.params.id

    if (!this.id) {
      this.$router.push('/')
    }
  },
  mounted () {},
  methods: {
    toogleText () {
      this.showText = !this.showText
      this.timer = setTimeout(() => {
        this.cn = true
      }, 500)
    },
    toogleService () {
      this.showService = !this.showService
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.id
    next()
  }
}
</script>
<style lang="less" >
@import "../less/mixin.less";
@import "../less/common.less";
.logo {
  display: inline-block;
  height: 30px;
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 11;
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
      .btnImg{
        &:hover {
          background-image: url("../images/navBtn.png");
        }
      }
    }

    .changlang {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 30px;
      cursor: pointer;
      &:hover {
        background: none;
      }
      button {
        background: none;
        outline: none;
        border: none;
        color: #fff;
        transition: all 0.3s;
        height: 30px;
        line-height: 30px;
        padding: 10px;
        cursor: pointer;
      }
      .active {
        font-size: 20px;
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
      border-radius: 50px;
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
    .service-navs {
      justify-content: flex-start;
      margin-top: 60px;
      .item {
        display: block;
        margin-top: 20px;
      }
    }
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
</style>
