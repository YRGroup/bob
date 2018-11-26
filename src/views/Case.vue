<template>
  <div class="case-page">
    <bob-header type="home" ></bob-header>
    <div class="case-content">
      <div class="case-banner" >
        <div class="bg" :style="{backgroundImage:`url(${caseInfo.banner})`}"></div>
        <!-- <div class="desc">
          <p class="p1">{{caseInfo.title}}</p>
          <p class="p2">{{caseInfo.tag}}</p>
        </div> -->
      </div>
      <bob-article  v-if="caseInfo.content">
        <div class="caseinfotitle">{{caseInfo.title}}</div>
        <div v-html="caseInfo.content">
        </div>
      </bob-article>
      <!-- -->
    </div>
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
    <bob-footer></bob-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from '@/components/bobHeader.vue'
import bobFooter from '@/components/bobFooter.vue'
import bobArticle from '@/components/bobArticle.vue'
import API from '@/api/index'
import Case from '@/class/case'

let lazyImg = require('@/images/nodata.jpg')
export default {
  name: 'case',
  components: {
    bobHeader,
    bobFooter,
    bobArticle
  },
  data () {
    return {
      id: '',
      caseInfo: {},
      scrollY: 0,
      srcset: `${lazyImg} 1236w, ${lazyImg} 813w, ${lazyImg} 768w, ${lazyImg} 1200w `
    }
  },
  computed: {
    showSideBar () {
      return this.scrollY > 400
    }
  },

  created () {
    this.id = this.$route.params.id

    if (!this.id) {
      this.$router.push('/')
    }
    this.getData()
  },
  mounted () {
    window.addEventListener('scroll', ev => {
      this.scrollY = window.scrollY
    })
  },
  methods: {
    getData () {
      API.getPost(this.id)
        .then(res => {
          // console.log(res);
          this.caseInfo = new Case(res.data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    back () {
      this.$router.back()
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

.case-page {
  background: #fff;
  .case-content {
    padding-bottom: 0.3rem;
    background: #fafafa;
  }

  .case-banner {
    height: 4.5rem;
    position: relative;
    overflow: hidden;
    .bg {
      .background-cover();
      // filter: blur(5px);
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      // &::after {
      //   content: "";
      //   position: absolute;
      //   left: 0;
      //   top: 0;
      //   right: 0;
      //   bottom: 0;
      //   background: rgba(0, 0, 0, 0.5);
      // }
    }
    .desc {
      position: absolute;
      bottom: 20%;
      left: 15%;
      color: #fff;
      z-index: 2;
      text-align: left;
      .p1 {
        font-size: 0.3rem;
        line-height: 0.5rem;
        font-weight: 500;
      }
      .p2 {
        font-size: 13px;
      }
    }
    @media (max-width:750px) {
      height: 2rem;
    }
  }
  .side-bar {
    position: fixed;
    right: 5%;
    bottom: 10%;
    z-index: 99;
    .tag {
      cursor: pointer;
      width: 0.4rem;
      height: 0.4rem;
      background: #fff;
      line-height: 0.4rem;
      text-align: center;
      margin: 10px 0;
      border: 1px solid #e4e4e4;
      cursor: pointer;
      color: #d0d0d0;
      transition: all 0.3s;
      .iconfont {
        font-size: 0.18rem;
      }
      &:hover {
        color: @color-theme;
        border: 1px solid @color-theme;
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
  transform: translateY(50%);
  opacity: 0;
}
.caseinfotitle {
  text-align: center;
  font-size: 0.18rem;
  line-height: 1.3;
  margin: 20px 0 40px;
}
</style>
