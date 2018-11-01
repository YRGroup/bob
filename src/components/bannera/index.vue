<template>
  <div class="banner-image">
    <!-- <img class="bg" src="../images/dong/lunBg.png" alt=""> -->
    <img class="animate-item item1" src="./lun-1.png" alt="">
    <img class="animate-item item2" src="./lun-2.png" alt="">
  </div>
</template>
<script>
export default {
  name: "bannera",
  data() {
    return {};
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
    height: 100%;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @base: 50%;
  @base2: @base - 870px;

  @offset: 20%;
  @base-left: @base - @offset;
  @base2-left: @base2 + @offset;
  //  @base2: @base+ 50px;
  .item1 {
    // animation-name: item1;
    top: 50%;
    left: -800px;
    transform: translate(800px, -50%);
  }
  .item2 {
    // animation-name: item2;
    top: 50%;
    left: -500px;
    transform: translate(500px, -50%);
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

