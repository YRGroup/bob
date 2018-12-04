<template>
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
.wrappper {
  position: relative;
  .p1 {
    width: 95px;
    height: 95px;
    border: 2px solid #fff;
    line-height: 95px;
    font-size: 50px;
    text-align: center;
    color: #fff;
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

      img {
        width: 50px;
        height: 50px;
      }
    }
    .p2 {
      font-size: 16px;
      margin-bottom: 20px;
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

