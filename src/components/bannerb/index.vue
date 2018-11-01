<template>
  <div class="banner-image">
    <img class="animate-item item1" src="./1.png" alt="">
    <img class="animate-item item2" src="./2.png" alt="">
  </div>
</template>
<script>
export default {
  name: "bannerb",
  data() {
    return {};
  },
  created() {
    console.log("b");
  }
};
</script>

<style lang="less" scoped>
.banner-image {
  background: #61a1bc;
  width: 100%;
  height: 100%;
  .bg {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    width: 100%;
    transform: translate(-50%, -50%);
  }

  @base: 0;
  @offset: 10px;
  @offset2: 10px;
  @scale: 1.2;
  @animate1: -@base - @offset;
  @animate2: -@base + @offset2;

  .animate-item {
    display: inline-block;
    position: absolute;
    height: 100%;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    top: @base;
    left: @base;
    transform: translate(-@base, -@base) scale(@scale);
    // transform-origin: 50% 15%;
  }

  .item1 {
    animation-name: item1;
    // z-index: 2;
  }
  .item2 {
    animation-name: item2;
  }

  @keyframes item1 {
    0% {
      transform: translate(-@base, -@base) scale(@scale);
    }
    50% {
      transform: translate(-@offset, @offset) scale(@scale);
    }
    100% {
      transform: translate(-@base, -@base) scale(@scale);
    }
  }
  @keyframes item2 {
    0% {
      transform: translate(-@base, -@base) scale(@scale);
    }
    50% {
      transform: translate(-@offset2, -@offset2) scale(@scale);
    }
    100% {
      // transform: translateX(0);
      transform: translate(-@base, -@base) scale(@scale);
    }
  }
}
</style>
