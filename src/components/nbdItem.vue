<template>
  <div class="nbdCon">
    <div class="arrow" v-if="showArrow">
      <img src="../images/arrow.png" alt>
    </div>
    <div class="wrappper" >
      <div class="p1" @click="handle">{{item.name}}</div>
      <transition name="icons">
        <div class="icons" >
          <div
            v-for="(type, i) in item.types"
            :key="i"
            :style="{animationDelay:`${x+i*y}s`}"
            :class="['icon-box',showIcons?'icon-in':'icon-out']"
          >
            <p class="icon">
              <!-- <img :src="type.icon" alt> -->
              <i class="iconfont" v-html="type.icon"></i>
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
    },
    showIcons: {
      default: true,
      type: Boolean
    }
  },
  data () {
    return {
      // showIcons: false
    }
  },
  computed: {
    x () {
      return this.showIcons ? 0 : 0.3
    },
    y () {
      return this.showIcons ? 0.1 : -0.1
    }
  },
  created () {},
  methods: {
    handle () {
      this.$emit('handle')
    }
  },
  watch: {}
}
</script>
<style lang="less" scoped>
@import "../less/variable.less";
.nbdCon {
  display: flex;
  flex-direction: row;
  align-items: top;
}
.arrow {
  margin-top: 25px;
  margin-right: 12px;
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
    position: absolute;
    left: 0;
    right: 0;
    top: 70px;
    text-align: center;
    color: #fff;
    margin-top: 10px;
    overflow: hidden;
    .icon-box {
      padding-top:20px;
      animation-duration: 0.3s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-out;
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
      width: 46px;
      height: 46px;
      margin: 0 auto;
      img {
        max-width: 100%;
        max-height: 100%;
      }
      .iconfont {
        color: @color-theme;
        font-size: 40px;
      }
    }
    .p2 {
      font-size: 14px;
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

// .icons-enter-active,
// .icons-leave-active {
//   // transition: all 0.5s;
//   // transform: translateX(0);
// }
.icons-leave-active {
  transition-delay: 0.5s;
}
// .icons-enter,
// .icons-leave-to {
//   // transform: translateX(100%);
// }

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
    display: none;
  }
}
</style>
