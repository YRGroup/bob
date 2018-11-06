<template>
  <div class="banner-image">
    <div class="lg">
      <img class="animate-item item1" src="./1.png" alt="">
      <img class="animate-item item2" src="./2.png" alt="">
    </div>
    <div class="xs">
      <img class="animate-item item1" src="./p1.png" alt="">
      <img class="animate-item item2" src="./p2.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'bannerb',
  data () {
    return {}
  },
  created () {}
}
</script>

<style lang="less" scoped>
@import "../../less/variable.less";
.banner-image {
  background: #cd4d44;
  width: 100%;
  height: 100%;
  // .bg {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   height: 100%;
  //   width: 100%;
  //   transform: translate(-50%, -50%);
  // }

  @base: -5rem;
  @offset: 1rem;

  .animate-item {
    display: inline-block;
    position: absolute;
    height: 100%;
    animation-duration: 5s;
    animation-timing-function: @bezier;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    right: @base;
    top: 50%;
  }
  .item1 {
    animation-name: item1;
    transform: translate(@base, -50%) scale(0.9);
    z-index: 2;
  }
  .item2 {
    animation-name: item2;
    transform: translate(@base, -50%) scale(1.1);
  }

  @keyframes item1 {
    0% {
      transform: translate(@base, -50%) scale(0.9);
    }
    90% {
      transform: translate(@base, -50%) scale(1);
    }
    100% {
      transform: translate(@base, -50%) scale(1);
    }
  }
  @keyframes item2 {
    0% {
      transform: translate(@base, -50%) scale(1.1);
    }
    90% {
      transform: translate(@base, -50%) scale(1);
    }
    100% {
      transform: translate(@base, -50%) scale(1);
    }
  }
  .xs {
    display: none;
  }
  @media (max-width: 768px) {
    .lg {
      display: none;
    }
    .xs {
      display: block;
    }
  }
}
</style>
