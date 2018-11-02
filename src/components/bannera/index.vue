<template>
  <div class="banner-image">
    <!-- <img class="bg" src="./1.png" alt=""> -->
    <img class="animate-item item1" src="./1.png" alt="">
    <img class="animate-item item2" src="./2.png" alt="">
  </div>
</template>
<script>
export default {
  name: 'bannera',
  data () {
    return {}
  },
  created () {

  }
}
</script>

<style lang="less" scoped>
@import "../../less/variable.less";
.banner-image {
  // position: absolute;
  background: #d9b232;
  width: 100%;
  height: 100%;
  // top: 50%;
  // left: 50%;

  // transform: translate(-50%, -50%);
  .bg {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    width: 100%;
    transform: translate(-50%, -50%);
  }

  @base: -500px;
  @offset: 150px;

  .animate-item {
    display: inline-block;
    position: absolute;
    height: 100%;
    animation-duration: 5s;
    animation-timing-function: @bezier;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    left: @base;
    top: 50%;
  }
  .item1 {
    animation-name: item1;
    transform: translate(-@base - @offset, -50%);
  }
  .item2 {
    animation-name: item2;
    transform: translate(-@base + @offset, -50%);
  }

  @keyframes item1 {
    0% {
      transform: translate(-@base - @offset, -50%);
    }
    90% {
      transform: translate(-@base, -50%);
    }
    100% {
      transform: translate(-@base, -50%);
    }
  }
  @keyframes item2 {
    0% {
      transform: translate(-@base + @offset, -50%);
    }
    90% {
      transform: translate(-@base, -50%);
    }
    100% {
      transform: translate(-@base, -50%);
    }
  }
}
</style>
