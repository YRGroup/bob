<template>
  <div class="banner-image">
    <!-- <img class="bg" src="../images/dong/lunBg.png" alt=""> -->
    <img class="animate-item item1" src="./hua-1.png" alt="">
    <img class="animate-item item2" src="./hua-2.png" alt="">
  </div>
</template>
<script>
export default {
  name: "bannera",
  data() {
    return {
      
    };
  }
};
</script>


<style lang="less" scoped>
.banner-image {
  position: absolute;
  background: #d9b232;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .animate-item {
    display: inline-block;
    position: absolute;
    // height: 100%;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @base: -600px;
  @base2: @base + 870px;
  //  @base2: @base+ 50px;
  .item1 {
    animation-name: item1;
    top: 0;
    left: @base;
  }
  .item2 {
    animation-name: item2;
    top: 0;
    left: @base2;
  }

  @keyframes item1 {
    0% {
    }
    50% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes item2 {
    0% {
    }
    50% {
      transform: translateX(20px);
    }
    100% {
      transform: translateX(0);
    }
  }
}
</style>

