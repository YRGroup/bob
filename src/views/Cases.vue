<template>
  <div class="case-page">
    <bob-header></bob-header>
    <div  class="banner-bg" :style="{backgroundImage:`url(${banner})`}">
      <div class="content">
        <h3 class="p1">脱颖而出+与众不同</h3>
        <p class="p2">越来越多的用户通过互联网来了解我们，通过互联网拉近与用户的距离，来更好的为用户提供产品服务</p>
        <p class="p3">
          <span>微信平台解决方案</span>
          <span>微信平台解决方案</span>
          <span>微信平台解决方案</span>
          <span>微信平台解决方案</span>
          <span>微信平台解决方案</span>
          <span>微信平台解决方案</span>
        </p>
      </div>
    </div>
    <div>
      <h5 class="section-title">
        <span>案例展示 / <span class="en">case</span> </span>
      </h5>
    </div>
    <div class="case-list">
      <ul>
        <router-link  tag="li" v-for="item in caseList" :key="item.id" :to="`/case/${item.id}`">
          <p>
            {{item.title.rendered}}
          </p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from '@/components/bobHeader.vue'

import API from '@/api/index'

export default {
  name: 'home',
  components: {
    bobHeader
  },
  data () {
    return {
      id: '',
      bannerList: {
        a: require('@/images/3.jpg'),
        b: require('@/images/3.jpg'),
        c: require('@/images/3.jpg'),
        d: require('@/images/3.jpg'),
        e: require('@/images/3.jpg'),
        f: require('@/images/3.jpg')
      },
      caseList: []
    }
  },
  computed: {
    banner () {
      return this.bannerList[this.id]
    }
  },

  created () {
    this.id = this.$route.params.id

    if (!this.id) {
      this.$router.push('/')
    }
    this.getData()
  },
  methods: {
    getData () {
      API.getCatPosts(6)
        .then(res => {
          console.log(res)
          this.caseList = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="less" scoped>
@import "../less/mixin.less";

.case-page {
  background: #fff;
  .banner-bg {
    .background-cover();
    // background-image: url("../images/3.jpg");
    height: 800px;
    .flex-column();
    .content {
      // height: 100%;
      padding: 0 0.5rem;
      color: #fff;
      .p1 {
        font-size: 0.6rem;
      }
      .p2 {
        font-size: 15px;
        line-height: 60px;
        color: #ddd;
      }
      .p3 {
        span {
          display: inline-block;
          padding: 0 10px;
          border-radius: 20px;
          line-height: 40px;
          border: 1px solid #fff;
          margin: 30px 10px 0;
          font-size: 0.12rem;
        }
      }
    }
  }
  .case-list {

  }
}
</style>
