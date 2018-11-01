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
  background: #cd4a44;
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
  .animate-item {
    display: inline-block;
    position: absolute;
    height: 100%;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    transform-origin: 50% 25%;
  }

  @base: -500px;
  @offset: 20px;
  @offset2: 10px;

  @animate1: -@base - @offset;
  @animate2: -@base + @offset2;

  .item1 {
    // animation-name: item1;
    top: 50%;
    left: @base;
    // height: 120%;
    transform: translate(-@base, -50%) scale(1.52);
    // transform-origin: 50% 25%;
  }
  .item2 {
    // animation-name: item2;
    top: 50%;
    left: @base;
    transform: translate(-@base, -50%) scale(1.52);
  }

  @keyframes item1 {
    0% {
      transform: translate(-@base, -50%);
    }
    50% {
      transform: translate(@animate1, -50%);
    }
    100% {
      transform: translate(-@base, -50%);
    }
  }
  @keyframes item2 {
    0% {
      transform: translate(-@base, -50%);
    }
    50% {
      transform: translate(@animate2, -50%);
    }
    100% {
      // transform: translateX(0);
      transform: translate(-@base, -50%);
    }
  }
}
</style>
