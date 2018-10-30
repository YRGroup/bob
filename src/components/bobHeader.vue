<template>
  <div class="header-wrapper absolute-header">
    <header :class="['header',{serviceHeader:!homeHeader}]">
      <a href="" class="logo"  v-if="homeHeader">
        <img class="logo1" src="../images/logo.png" alt="logo">
        <img class="logo2" src="../images/logoS.png" alt="logo">
      </a>
      <div class="service-navs" v-else>
        <router-link :class="['item', {'active':id==1}]" to="/service/1">论</router-link>.
        <router-link :class="['item', {'active':id==2}]" to="/service/2">论</router-link>
        <router-link :class="['item', {'active':id==3}]" to="/service/3">论</router-link>
        <router-link :class="['item', {'active':id==4}]" to="/service/4">论</router-link>
        <router-link :class="['item', {'active':id==5}]" to="/service/5">论</router-link>
        <router-link :class="['item', {'active':id==6}]" to="/service/6">论</router-link>
      </div>
      <span class="nav-btn" @click="toogleSideNav"></span>
    </header>
<transition name="sideNav">
  <div class="nav-section" id="nav-section" v-show="show">
    <span class="close-btn nav-btn" @click="toogleSideNav">
    </span>
    <ul class="side-nav">
      <li>
        <div class="wrapper">
          <router-link class="item" to="/Service/1">
            <span class="en"><span>A</span>nalytics</span>
            <span class="cn">论</span>
          </router-link>
        </div>
      </li>
      <li>
        <div class="wrapper">
          <router-link class="item" to="/Service/1">
            <span class="en"><span>B</span>randing</span>
            <span class="cn">划</span>
          </router-link>
        </div>

      </li>
      <li>
        <div class="wrapper">
        <router-link class="item" to="/Service/1">
          <span class="en"><span>C</span>ampaign</span>
          <span class="cn">搞</span>
        </router-link>
        </div>
      </li>
      <li>
        <div class="wrapper">
          <router-link class="item" to="/Service/1">
          <span class="en"><span>D</span>igital & web</span>
          <span class="cn">码</span>
          </router-link>
        </div>

      </li>
      <li>
        <div class="wrapper">
          <router-link class="item" to="/Service/1">
          <span class="en"><span>E</span>ditorial</span>
          <span class="cn">纪</span>
          </router-link>
        </div>

      </li>
      <li>
        <div class="wrapper">
          <router-link class="item" to="/Service/1">
            <span class="en"><span>F</span>abrication</span>
            <span class="cn">造</span>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "bobHeader",
  props: {
    msg: String,
    homeHeader: {
      default: true,
      type: Boolean
    },
    id: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    toogleSideNav() {
      this.show = !this.show;
      console.log(1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../less/variable.less";
@import "../less/mixin.less";
@import "../less/common.less";

.absolute-header {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;

  .nav-item {
    color: #fff;
  }
}
.header-wrapper {
  // background: #333;
}
.header {
  .flex();
  position: relative;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 30px 40px;
  &.serviceHeader {
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
}
.nav-btn {
  display: inline-block;
  background-image: url("../images/navBtn.png");
  background-size: 100% 100%;
  width: 25px;
  height: 25px;
  transition: all 0.5s;
  cursor: pointer;
  position: absolute;
  right: 40px;
  &:hover {
    background-image: url("../images/navBtn1.png");
    animation: nav-btn 1.8s linear infinite;
  }
}
@keyframes nav-btn {
  50% {
    transform: rotateZ(180deg) scale(1.3);
  }

  100% {
    transform: rotateZ(360deg) scale(1);
  }
}

.logo {
  display: inline-block;
  height: 40px;

  img {
    height: 100%;
  }

  .logo2 {
    display: none;
  }

  @media (max-width: 760px) {
    height: 30px;

    .logo1 {
      display: none;
    }

    .logo2 {
      display: block;
    }
  }
}
.service-navs {
  .flex();
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
      // width: 50px;
      // height: 50px;
      // line-height: 50px;
      animation: nav .3s ease-in-out;
    }
    @keyframes nav {
      0% {
        transform: scale(1);
      }
    }
  }
}
// 导航
#nav-section {
  .flex-column();
  background: @color-theme-2;
  position: fixed;
  width: 100%;
  max-width: 800px;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 99;
  // transform: translateX(100%);
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.01, 0.67, 0.65, 0.97);
  .side-nav {
    .flex-column();
  }
  &.nav-in {
    animation-name: nav-in;
    animation-delay: 0s;
  }

  &.nav-out {
    animation-name: nav-out;
    transform: translateX(0%);
    animation-delay: 0.5s;
  }

  .close-btn {
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  ul {
    text-align: center;
    color: #fff;
    font-size: 30px;
    line-height: 50px;
    margin: auto;
    height: 100%;
    overflow: hidden;
    padding: 40px 0;

    li {
      padding: 30px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      text-align: left;

      .en {
        font-size: 28px;
        width: 280px;
        display: inline-block;

        span {
          font-size: 64px;
        }
      }

      .cn {
        font-size: 50px;
      }

      .wrapper {
        overflow: hidden;
      }

      .item {
        display: inline-block;
        animation-duration: 0.1s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.01, 0.67, 0.65, 0.97);
      }

      .navitem-in {
        animation-name: navitem-in;
      }

      .navitem-out {
        transform: translateY(0%);
        animation-name: navitem-out;
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      padding: 80px 0;

      li {
        padding: 10px;

        .en {
          width: 200px;
          font-size: 20px;

          span {
            font-size: 40px;
          }
        }

        .cn {
          font-size: 40px;
        }
      }
    }
  }
}

@keyframes nav-in {
  100% {
    transform: translateX(0%);
  }
}

@keyframes nav-out {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(100%);
  }
}
.sideNav-enter-active,
.sideNav-leave-active {
  transition: all 0.5s;
  // transform: translateX(0);
}
.sideNav-enter,
.sideNav-leave-to {
  transform: translateX(100%);
}
@keyframes navitem-in {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes navitem-out {
  0% {
    opacity: 1;
    transform: translateY(0%);
  }

  100% {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>
