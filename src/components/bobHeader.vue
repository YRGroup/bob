<template>
  <div :class="['header-wrapper', 'absolute-header', {'fixed-header':scrollY>200}]">
    <header class='header'>
      <router-link to="/" class="logo">
        <img class="logo1" src="../images/logo.png" alt="logo">
        <img class="logo2" src="../images/logoS.png" alt="logo">
      </router-link>
      <span v-if="type=='home'" class="nav-btn" @click="toogleSideNav">
        <span class="btnImg"></span>
      </span>
      <div v-if="type=='service'" class="service-navs">
        <div>
          <router-link :class="['kangxi','item', {'active':id=='a'}]" to="/service/a">论</router-link>
          <router-link :class="['kangxi','item', {'active':id=='b'}]" to="/service/b">划</router-link>
          <router-link :class="['kangxi','item', {'active':id=='c'}]" to="/service/c">搞</router-link>
          <router-link :class="['kangxi','item', {'active':id=='d'}]" to="/service/d">码</router-link>
          <router-link :class="['kangxi','item', {'active':id=='e'}]" to="/service/e">纪</router-link>
          <router-link :class="['kangxi','item', {'active':id=='f'}]" to="/service/f">造</router-link>
        </div>
      </div>
      <ul class="nav-list" v-if="type=='cases'">
        <li class="nav-item">
          <router-link to="/">
            Home
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/cases/a">
            Analytics
          </router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="/cases/b">
            Branding
          </router-link>
        </li>
        <!-- <li class="nav-item">
            <router-link class="nav-item" to="/cases/c">
          Campaign
        </router-link>
        </li> -->
        <li class="nav-item">
          <router-link class="nav-item" to="/cases/d">
            Digital & Web
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item" to="/cases/e">
            Editorial
          </router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-item" to="/cases/f">
            Fabrication
          </router-link>
        </li>
      </ul>
    </header>
    <transition name="sideNav">
      <div v-if="type=='home'" class="nav-section" id="nav-section" v-show="show">
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
                <span class="en"><span>D</span>igital & Web</span>
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
    id: {
      default: '',
      type: String
    },
    type: {
      default: 'home',
      type: String
    }
  },
  data () {
    return {
      show: false,
      scrollY: 0
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
  created () {
  },
  methods: {
    toogleSideNav () {
      this.show = !this.show
    }
  },
  mounted () {
    window.addEventListener('scroll', ev => {
      this.scrollY = window.scrollY
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../less/variable.less";
@import "../less/mixin.less";
@import "../less/common.less";

.header-wrapper {
  // background: #333;
  width: 100%;
  transition: all 0.5s;
  &.absolute-header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
  }
  &.fixed-header {
    position: fixed;
    top: 0;
    background: #4e4e4e;
    // background: @color-theme;
    animation: fixed 0.5s ease-in-out;
  }
}

@keyframes fixed {
  0% {
    transform: translateY(-100%);
  }
}
.header {
  .flex();
  position: relative;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 18px 40px;
  // .nav-btn {
  //   top: 20px;
  // }
  &.serviceHeader {
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
  //cases页nav
  .nav-list {
    color: #fff;
    .nav-item {
      cursor: pointer;
      display: inline-block;
      margin: 0 10px;
      // opacity: .7;
      &:hover {
        opacity: 1;
      }
    }
  }
  //service页nav
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
  @media (max-width: 760px) {
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

.logo {
  display: inline-block;
  height: 30px;
  cursor: pointer;
  z-index: 20;
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

// 侧边导航
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
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.01, 0.67, 0.65, 0.97);
  .wrapper {
    // opacity: 0.7;
    color: #ddd;
    transition: all 0.3s;
    &:hover {
      color: #fff;
    }
    a {
      &:hover {
        color: #fff;
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
    top: 0.1rem;
    left: 0.1rem;
    .btnImg {
      &:hover {
        background-image: url("../images/navBtn.png");
      }
    }
  }

  ul {
    text-align: center;
    color: #fff;
    margin: auto;
    height: 100%;
    overflow: hidden;
    padding: 0.6rem 0;

    li {
      padding: 0.1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      text-align: left;
      .en {
        font-size: @font-size-xxxl;
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
      // padding: 80px 0;
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
