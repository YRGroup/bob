<template>
  <div class="nbd-page">
    <bob-header type="home"></bob-header>
    <div class="nbd-banner flex-column">
      <p class="p1 wow bounceInDown" data-wow-duration="1s">
        <img src="../images/nbd/nbd1.png" alt>
      </p>
      <bob-star></bob-star>
    </div>

    <div class="section2">
      <h5>
        开发流程
        <span>/ Development Workflow</span>
      </h5>
      <div :class="['content', $store.state.isPad?'flex-column':'flex']">
        <div v-for="(item, index) in nbd" :key="index">
          <transition name="fade" appear>
            <nbd-item
              @handle="showDetail(posts[index].id,index)"
              :item="item"
              :style="{transitionDelay:`${index*0.1}s`}"
              :showArrow="index?true:false"
              :showIcons="showIndex == index||$store.state.isPad"
              @mouseenter.native="handleMouseEnter(index)"
              @mouseleave.native="handleMouseLeave(index)"
            ></nbd-item>
          </transition>
        </div>
      </div>
    </div>
    <bob-footer></bob-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from '@/components/bobHeader.vue'
import bobFooter from '@/components/bobFooter.vue'
import peopleCard from '@/components/peopleCard.vue'
import bobArticle from '@/components/bobArticle.vue'
import bobStar from '@/components/bobStar.vue'
import nbdItem from '@/components/nbdItem.vue'
import Case from '@/class/case'
import API from '@/api/index'
import nbd from '@/assets/nbd'
import { WOW } from 'wowjs'
import { initBody, hiddenBody } from '@/assets/utils.js'

export default {
  name: 'nbd',
  components: {
    bobHeader,
    bobFooter,
    peopleCard,
    nbdItem,
    bobArticle,
    bobStar
  },
  data () {
    return {
      nbd: nbd,
      showSideDialog: false,
      showIndex: 0
    }
  },
  computed: {
    posts () {
      return this.$store.state.nbd
    }
  },
  created () {
    this.getPosts()
  },
  mounted () {
    new WOW().init()
  },
  methods: {
    showDetail (id, index) {
      this.$router.push('nbddetail/' + id)
    },
    handleClose () {
      this.showSideDialog = false
      initBody()
    },
    getPosts () {
      if (!this.$store.state.nbd.length) {
        this.$store.dispatch('getNbd')
      }
    },
    handleMouseLeave (index) {
      // this.showIndex = -1;
    },
    handleMouseEnter (index) {
      this.showIndex = index
    }
  }
}
</script>
<style lang="less" scoped>
@import "../less/variable.less";
@import "../less/mixin.less";
h5 {
  font-size: 0.25rem;
  margin-bottom: 0.4rem;
  span {
    font-size: 0.2rem;
    opacity: 0.5;
  }
}
.nbd-page {
  background: #fff;
  .nbd-banner {
    height: 4.5rem;
    background: #ddd;
    position: relative;
    overflow: hidden;
    color: #fff;
    justify-content: space-around;
    overflow: hidden;
    // background: url("../images/nbd/banner.png") no-repeat;
    background: @color-theme;
    .p1 {
      position: absolute;
      z-index: 20;
      img {
        width: 2rem;
      }
    }
  }
  .section2 {
    padding: .5rem 0;
    overflow: hidden;
    // height: 450px;
    .content {
      width: 1200px;
      margin: 0 auto;
      align-items: flex-start;
      justify-content: space-around;
    }
  }
  @media (max-width: 1024px) {
    .section2 {
      .content {
        max-width: 100%;
        box-sizing: border-box;
        align-items: center;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
