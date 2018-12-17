<template>
  <transition name="fadeBottom">
    <div class="side-bar" v-show="showSideBar">
      <div class="tag" @click="back()">
        <i class="iconfont">&#xe7a4;</i>
      </div>
      <div class="tag" @click="top()">
        <i class="iconfont">&#xe67f;</i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      scrollY: 0
    }
  },
  computed: {
    showSideBar () {
      return this.scrollY > 10
    }
  },
  mounted () {
    window.addEventListener('scroll', ev => {
      this.scrollY = window.scrollY
    })
  },
  methods: {
    back () {
      this.$emit('back')
    },
    top () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style lang="less" scoped>
@import "../less/variable.less";
@import "../less/mixin.less";
.side-bar {
  position: fixed;
  right: 5%;
  bottom: 10%;
  z-index: 90;
  .tag {
    cursor: pointer;
    width: 0.35rem;
    height: 0.35rem;
    background: #fff;
    line-height: 0.35rem;
    text-align: center;
    margin: 10px 0;
    // border: 1px solid #e4e4e4;
    border: 1px solid @color-theme;
    cursor: pointer;
    color: #d0d0d0;
    transition: all 0.3s;
    .iconfont {
      font-size: 0.16rem;
      color: @color-theme;
    }
    &:hover {
      color: #fff;
      background: @color-theme;

      border: 1px solid @color-theme;
      .iconfont {
        color: #fff;
      }
    }
  }
}

.fadeBottom-enter-active,
.fadeBottom-leave-active {
  transition: all 0.5s;
  // transform: translateX(0);
}

.fadeBottom-enter,
.fadeBottom-leave-to {
  transform: translateY(20px);
  opacity: 0.2;
}
</style>
