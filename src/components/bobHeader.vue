<template>
  <div class="header-wrapper absolute-header">
    <header :class="['header',{serviceHeader:!homeHeader}]">
      <router-link to="/" class="logo"  v-if="homeHeader">
        <img class="logo1" src="../images/logo.png" alt="logo">
        <img class="logo2" src="../images/logoS.png" alt="logo">
      </router-link>
      <span class="nav-btn" @click="toogleSideNav">
        <span class="btnImg"></span>
      </span>
    </header>
<transition name="sideNav">
  <div class="nav-section" id="nav-section" v-show="show">
    <span class="close-btn nav-btn" @click="toogleSideNav">
      <span class="btnImg"></span>
    </span>
    <ul class="side-nav">
      <li>
          <div class="wrapper">
            <router-link
            :class="['item',show ? 'navitem-in':'navitem-out']"
            :style="{animationDelay:`${n+0*i}s`}"
            to="/service/a">
              <span class="en"><span>A</span>nalytics</span>
              <span class="cn">论</span>
            </router-link>
          </div>
      </li>
      <li>
        <div class="wrapper">
          <router-link
          :class="['item',show ? 'navitem-in':'navitem-out']"
          :style="{animationDelay:`${n+1*i}s`}"
          to="/service/b">
            <span class="en"><span>B</span>randing</span>
            <span class="cn">划</span>
          </router-link>
        </div>
      </li>
      <li>
        <div class="wrapper">
          <router-link
          :class="['item',show ? 'navitem-in':'navitem-out']"
           :style="{animationDelay:`${n+2*i}s`}"
          to="/service/c">
            <span class="en"><span>C</span>ampaign</span>
            <span class="cn">搞</span>
          </router-link>
        </div>
      </li>
      <li>
        <div class="wrapper">
          <router-link
            :class="['item',show ? 'navitem-in':'navitem-out']"
             :style="{animationDelay:`${n+3*i}s`}"
            to="/service/d">
            <span class="en"><span>D</span>igital & web</span>
            <span class="cn">码</span>
          </router-link>
        </div>
      </li>
      <li>
        <div class="wrapper">
          <router-link
            :class="['item',show ? 'navitem-in':'navitem-out']"
             :style="{animationDelay:`${n+4*i}s`}"
            to="/service/e">
            <span class="en"><span>E</span>ditorial</span>
            <span class="cn">纪</span>
          </router-link>
        </div>
      </li>
      <li>
        <div class="wrapper">
          <router-link
            :class="['item',show ? 'navitem-in':'navitem-out']"
            :style="{animationDelay:`${n+5*i}s`}"
            to="/service/f">
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
  name: 'bobHeader',
  props: {
    msg: String,
    homeHeader: {
      default: true,
      type: Boolean
    },
    id: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    n () {
      return this.show ? 0 : 1
    },
    i () {
      return this.show ? 0.15 : -0.15
    }
  },
  methods: {
    toogleSideNav () {
      this.show = !this.show
    }
  }
}
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
  // .nav-btn {
  //   top: 20px;
  // }
  &.serviceHeader {
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
}

.logo {
  display: inline-block;
  height: 30px;

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

// 导航
#nav-section {
  .flex-column();
  background: @color-theme;
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
  .wrapper{
    opacity: 0.7;
    transition: all 0.3s;
    &:hover{
      opacity: 1;
    }
    a{
      &:hover{
        color:#fff;
      }
    }
  }
  .side-nav {
    .flex-column();
  }
  .nav-in {
    animation-name: nav-in;
    animation-delay: 1s;
  }

  .nav-out {
    animation-name: nav-out;
    transform: translateX(0%);
    animation-delay: 0.5s;
  }

  .close-btn {
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  ul {
    text-align: center;
    color: #fff;
    margin: auto;
    height: 100%;
    overflow: hidden;
    padding: 40px 0;

    li {
      padding: 30px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      text-align: left;
      .en {
        font-size: 0.2rem;
        width: 2.5rem;
        display: inline-block;

        span {
          font-size: 0.4rem;
        }
      }

      .cn {
        font-size: 0.4rem;
      }

      .wrapper {
        overflow: hidden;
      }

      .item {
        display: inline-block;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.01, 0.67, 0.65, 0.97);
      }

      .navitem-in {
        transform: translateY(100%);
        opacity: 0;
        animation-name: navitem-in;
      }

      .navitem-out {
        transform: translateY(0%);
        opacity: 1;
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
          width: 3rem;
          font-size: 0.3rem;

          span {
            // font-size: 40px;
            font-size: 0.6rem;
          }
        }

        .cn {
          // font-size: 40px;
          font-size: 0.6rem;
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
.sideNav-leave-active {
  transition-delay: 0.5s;
}
.sideNav-enter,
.sideNav-leave-to {
  transform: translateX(100%);
}

.navitem-enter-active,
.navitem-leave-active {
  transition: all 0.3s;
}
.navitem-enter-active {
  transition-delay: 0.3s;
}
.navitem-enter,
.navitem-leave-to {
  opacity: 0;
  transform: translateY(100%);
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
