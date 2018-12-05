<template>
  <div class="nbdCon">
    <div class="arrow" v-if="showArrow">
      <img src="../images/arrow.png" alt>
    </div>
    <div class="wrappper" @mouseenter="showIcons=true" @mouseleave="showIcons=false">
      <div class="p1">{{item.name}}</div>
      <transition name="icons">
        <div class="icons" v-show="showIcons">
          <div
            v-for="(type, i) in item.types"
            :key="i"
            :style="{animationDelay:`${x+i*y}s`}"
            :class="['icon-box',showIcons ? 'icon-in':'icon-out']"
          >
            <p class="icon">
              <img :src="type.icon" alt>
            </p>
            <p class="p2">{{type.name}}</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      default: {},
      type: Object
    },
    showArrow: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      showIcons: false
    };
  },
  computed: {
    x() {
      return this.showIcons ? 0 : 0.3;
    },
    y() {
      return this.showIcons ? 0.1 : -0.1;
    }
  },
  created() {},
  methods: {},
  watch: {}
};
</script>
<style lang="less" scoped>
@import "../less/variable.less";
.nbdCon {
  display: flex;
  flex-direction: row;
  align-items: top;
}
.arrow {
  margin-top: 32px;
  margin-right: 10px;
}
.wrappper {
  position: relative;

  .p1 {
    width: 80px;
    height: 80px;
    // border: 2px solid @color-theme;
    background: @color-theme;
    line-height: 80px;
    font-size: 36px;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
  .icons {
    // position: absolute;
    // top: 110px;
    text-align: center;
    color: #fff;
    margin-top: 10px;
    overflow: hidden;
    .icon-box {
      animation-duration: 0.3s;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
    }
    .icon-in {
      animation-name: icon-in;
      transform: translateY(-100%);
      opacity: 0;
    }
    .icon-out {
      animation-name: icon-out;
      // transform: translateX(0%);
    }
    .icon {
      text-align: center;

      img {
        width: 50px;
        height: 50px;
      }
    }
    .p2 {
      font-size: 16px;
      margin-bottom: 20px;
      color: @color-theme;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s linear;
}

.fade-enter {
  opacity: 0;
  transform: translateY(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.icons-enter-active,
.icons-leave-active {
  // transition: all 0.5s;
  // transform: translateX(0);
}
.icons-leave-active {
  transition-delay: 0.5s;
}
.icons-enter,
.icons-leave-to {
  // transform: translateX(100%);
}

@keyframes icon-in {
  // 0% {
  //   opacity: 0;
  //   transform: translateY(-100%);
  // }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes icon-out {
  // 0% {
  //   opacity: 1;
  //   transform: translateY(0%);
  // }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}
</style>

