<template>
  <div class="nbddetail">
    <bob-header></bob-header>
    <div class="nbd-banner"></div>
    <div class="navBox">
      <ul class="nav-list">
        <li
          v-for="(item,index) in posts "
          :key="index"
          :class="['item',id==item.id&&'active']"
          @click="$router.push('/nbddetail/'+item.id)"
        >
          <p>
            <i class="iconfont" v-html="nbd[index].icon"></i>
            <span v-html="item.title.rendered"></span>
          </p>
        </li>
      </ul>
    </div>
    <div class="detail-content">
      <div class="content">
        <div class="case-article" v-if="post">
          <p
            class="wow fadeInUpBig"
            data-wow-duration="1.2s"
            v-for="(item, index) in post.imgs"
            :key="index"
          >
            <img :src="item" alt="BOB">
          </p>
        </div>
      </div>
    </div>
    <bob-footer></bob-footer>
    <bob-sidebar @back="goback"></bob-sidebar>
  </div>
</template>
<script>
import { info } from '@/assets/info'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import API from '@/api/index'
import bobHeader from '@/components/bobHeader.vue'
import bobArticle from '@/components/bobArticle.vue'
import bobFooter from '@/components/bobFooter.vue'
import bobSidebar from '@/components/bobSidebar.vue'
import Case from '@/class/case'
import nbd from '@/assets/nbd'
import { WOW } from 'wowjs'

export default {
  name: 'nbddetail',
  components: {
    bobHeader,
    bobFooter,
    swiper,
    swiperSlide,
    bobArticle,
    bobSidebar
  },
  data () {
    return {
      id: '',
      nbd: nbd
    }
  },
  computed: {
    posts () {
      return this.$store.state.nbd
    },
    post () {
      return new Case(
        this.posts.find(el => {
          return el.id == this.id
        })
      )
    }
  },
  created () {
    this.id = this.$route.params.id
    if (!this.id) {
      this.$router.push('/')
    }
    if (!this.$store.state.nbd.length) {
      this.$store.dispatch('getNbd')
    }
  },
  mounted () {
    new WOW().init()
  },
  methods: {
    goback () {
      this.$router.push('/nbd')
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.id
    this.$nextTick(() => {
      new WOW().init()
    })
    next()
  }
}
</script>
<style lang="less" scoped>
@import "../less/mixin.less";
@import "../less/common.less";
// @import "../css/animate.css";
.nbddetail {
  background: #ffff;
  .nbd-banner {
    background: url("../images/nbd/banner.jpg") no-repeat center center;
    height: 220px;
    background-size: cover;
  }
  .content {
    min-height: 600px;
    width: 1000px;
    max-width: 100%;
    .case-article{
      width: 100%;
    }
    img {
      max-width: 100%;
      vertical-align: bottom;
    }
  }
  .detail-content {
    // align-items: flex-start;
    // justify-content: space-around;
    padding: 50px 0;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 50px;
  }
  .content{
    margin: 0 auto;
  }
  .navBox{
    border-bottom: 1px solid #ddd;
  }
  .nav-list {
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
    height: 50px;
    line-height: 50px;
    .item {
      font-size: 16px;
      color: #707070;
      text-align: left;
      // width: 180px;
      cursor: pointer;
      &.active {
        color: @color-theme;
        font-weight: 700;
        p {
          padding: 0 10px;
          border-bottom: 2px solid @color-theme;
        }
      }
      .iconfont {
        margin-right: 10px;
        font-size: 19px;
      }
    }
  }
  @media (max-width:1024px) {
    .detail-content{
      .nav-list{
        display: none;
      }
    }
  }
}
</style>
