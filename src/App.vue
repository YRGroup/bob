<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<style lang="less">
@import "./less/variable.less";
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "微软雅黑", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  background: @color-theme;
  overflow-x: hidden;
}
// .page-enter-active,
// .page-leave-active {
//   transition: all 0.5s;
// }

// .page-enter,
// .page-leave-to {
//   opacity: 0;
// }
</style>
