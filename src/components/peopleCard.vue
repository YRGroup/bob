<template>
  <div class="wrapper" 
    @mouseenter="mouseenter" 
    @mouseleave="mouseleave"
  >
    <transition name="defaultImg">
      <img  v-show="!hover"  class="img defaultImg" :src="defaultImg" alt="imgName">
    </transition>

    <transition  name="hoverImg">
      <img v-show="hover" class="img hoverImg" :src="hoverImg" alt="imgName">
    </transition>
    
  </div>
</template>
<script>
export default {
  props: {
    defaultImg: {
      type: String,
      default: ""
    },
    hoverImg: {
      type: String,
      default: ""
    },
    info: {
      type: String,
      default: ""
    },
    posX: {
      type: Number,
      default: 0
    },
    posY: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      hover: false
    };
  },
  computed: {},
  created() {},
  methods: {
    mouseenter() {
      this.hover = true;
      this.$emit("enter");
    },
    mouseleave() {
      this.hover = false;
      this.$emit("leave");
    }
  }
};
</script>
<style lang="less">
.wrapper {
  display: inline-block;
  position: relative;
  cursor: pointer;
  img {
    position: absolute;
    top: 0;
    left: 0;
    // transform: scale(1.1);
  }
}

.hoverImg-enter-active {
  transition: all 0.5s;
  transform: scale(1);

}
.hoverImg-leave-active {
}
.hoverImg-enter,
.hoverImg-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.defaultImg-enter-active {
  transition: all 1s;
}
.defaultImg-leave-active {
}
.defaultImg-enter,
.defaultImg-leave-to {
  opacity: 0;
}
</style>

