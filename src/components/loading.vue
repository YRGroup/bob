<template>
  <transition name="fade">
    <div v-show="visiable" class="loading-wrapper">
      <img class="loading-icon" src="../images/navBtn1.png" alt>
    </div>
  </transition>
</template>
<script>
import { initBody, hiddenBody } from "@/assets/utils.js";

export default {
  props: {
    visiable: {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {};
  },
  created() {
    this.initBody();
  },
  methods: {
    initBody() {
      hiddenBody();
    },
    closeHandle() {
      initBody();
    }
  },
  watch: {
    visiable(newVal, oldVal) {
      if (!newVal) {
        this.closeHandle();
      }
    }
  }
};
</script>
<style lang="less" scoped>
.loading-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  height: 100vh;
  z-index: 100;
  @base: 30px;
  .loading-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: @base;
    height: @base;
    margin-top: -@base / 2;
    margin-left: -@base / 2;
    animation: loadingIcon 1.5s infinite linear;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
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

