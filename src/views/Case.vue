<template>
  <div class="case-page">
    <bob-header type="home"></bob-header>
    <div class="case-content">
      <div class="case-banner">
        <div class="bg" :style="{backgroundImage:`url(${caseInfo.bannerUrl})`}"></div>
        <!-- <div class="desc">
          <p class="p1">{{caseInfo.title}}</p>
          <p class="p2">{{caseInfo.tag}}</p>
        </div>-->
      </div>
      <div class="case-article">
        <bob-article v-if="caseInfo.content" :caseInfo="caseInfo"></bob-article>
      </div>

      <!-- -->
    </div>
    <bob-footer></bob-footer>
    <bob-sidebar @back="goBack"></bob-sidebar>
    <loading :visiable="showLoading"></loading>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from '@/components/bobHeader.vue'
import bobFooter from '@/components/bobFooter.vue'
import bobArticle from '@/components/bobArticle.vue'
import loading from '@/components/loading.vue'
import API from '@/api/index'
import Case from '@/class/case'
import bobSidebar from '@/components/bobSidebar.vue'
let lazyImg = require('@/images/nodata.jpg')
export default {
  name: 'case',
  components: {
    bobHeader,
    bobFooter,
    bobArticle,
    loading,
    bobSidebar
  },
  data () {
    return {
      id: '',
      caseInfo: {},
      loading: true,
      showLoading: true,
      srcset: `${lazyImg} 1236w, ${lazyImg} 813w, ${lazyImg} 768w, ${lazyImg} 1200w `
    }
  },
  computed: {},

  created () {
    this.id = this.$route.params.id

    if (!this.id) {
      this.$router.push('/')
    }
    this.getData()
  },
  mounted () {},
  methods: {
    getData () {
      API.getPost(this.id)
        .then(res => {
          // console.log(res);
          this.caseInfo = new Case(res.data)
          this.$nextTick(() => {
            this.showLoading = false
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    goBack () {
      this.$router.back()
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
  .case-article {
    max-width: 900px;
    padding: 0.2rem 0.2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
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
    @media (max-width: 750px) {
      height: 2rem;
    }
  }
}

.caseinfotitle {
  text-align: center;
  font-size: 0.18rem;
  line-height: 1.3;
  margin: 20px 0 40px;
}
</style>
