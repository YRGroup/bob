<template>
<div class="nbdCon">
  <div class="arrow">
    <img src="../images/arrow.png" alt="">
  </div>
  <div class="wrappper" @mouseenter="showIcons=true" @mouseleave="showIcons=false">
    <div class="p1">{{item.name}}</div>
    <div class="icons">
      <transition-group name="fade" tag="div">
        <div
          v-for="(type, i) in item.types"
          :key="i"
          v-show="showIcons"
          :style="{transitionDelay:i*0.2+'s'}"
        >
          <p class="icon">
            <img :src="type.icon" alt>
          </p>
          <p class="p2">{{type.name}}</p>
        </div>
      </transition-group>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      default: {},
      type: Object
    }
  },
  data() {
    return {
      showIcons: false
    };
  },
  created() {},
  methods: {},
  watch: {}
};
</script>
<style lang="less" scoped>
@import "../less/variable.less";
.nbdCon{
  display: flex;
  flex-direction: row;
  align-items: top;
}
.arrow{
  margin-top: 25px;
  margin-right: 12px;
}
.wrappper {
  position: relative;
  
  .p1 {
    width: 80px;
    height: 80px;
    // border: 2px solid @color-theme;
    background: #c34a44;
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
    .icon {
      text-align: center;
      width: 50px;
      height: 50px;
      margin: 0 auto;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .p2 {
      font-size: 16px;
      margin-bottom: 20px;
      color: #c34a44;

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
  // transform: translateY(-100%);
}

@keyframes loadingIcon {
  50% {
    transform: rotateZ(180deg) scale(1.3);
  }

  100% {
    transform: rotateZ(360deg) scale(1);
  }
}
</style>

