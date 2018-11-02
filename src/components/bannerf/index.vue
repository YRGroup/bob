<template>
  <div class="banner-image">
    <!-- <img class="bg" src="./1.png" alt=""> -->
    <img class="animate-item item1" src="./1.png" alt="">
    <img class="animate-item item2" src="./2.png" alt="">
  </div>
</template>
<script>
export default {
  name: 'bannerf',
  data () {
    return {}
  },
  created () {
    console.log('a')
  }
}
</script>

<style lang="less" scoped>
.banner-image {
  // position: absolute;
  background: #e86644;
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
  @offset: 100px;

  .animate-item {
    display: inline-block;
    position: absolute;
    height: 100%;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    left: @base;
    top: @base;
  }
  .item1 {
    animation-name: item1;
    transform: translate(-@base + @offset, -@base - @offset);
    animation-timing-function: cubic-bezier(0.99, 0.74, 0.24, 1.15);
  }
  .item2 {
    animation-name: item2;
    transform: translate(-@base - @offset, -@base + @offset);
    animation-timing-function: cubic-bezier(0.99, 0.74, 0.24, 1.15);
  }

  @keyframes item1 {
    0% {
      transform: translate(-@base + @offset, -@base - @offset);
    }
    100% {
      transform: translate(-@base, -@base);
    }
  }
  @keyframes item2 {
    0% {
      transform: translate(-@base - @offset, -@base + @offset);
    }
    100% {
      transform: translate(-@base, -@base);
    }
  }
}
</style>
