<template>
  <div class="case-page">
    <bob-header></bob-header>
    <div  class="banner-bg" :style="{backgroundImage:`url(${banner})`}">
      <div class="content">
        <h3 class="p1">Digital & web</h3>
        <p class="p2">越来越多的用户通过互联网来了解我们，通过互联网拉近与用户的距离，来更好的为用户提供产品服务</p>
        <p class="p3">
          <span >微信平台解决方案</span>
          <span >微信平台解决方案</span>
          <span >微信平台解决方案</span>
          <span >微信平台解决方案</span>
          <span >微信平台解决方案</span>
          <span >微信平台解决方案</span>
        </p>
      </div>
    </div>
    <div>
      <h5 class="section-title">
        <span>案例展示 / <span class="en">case</span> </span>
      </h5>
    </div>

    <div v-if="caseList.length" class="case-wrapper">
      <el-row class="case-list">
        <el-col v-for="item in caseList" :lg="8" :md="12" :sm="12" :xs="24" :key="item.id">
          <router-link class="case-item"  tag="div" :to="`/case/${item.id}`">
            <div class="case-content" :style="{backgroundImage:`url(${item.thumbnailurl})`}">

            </div>
            <div class="case-title">
              <p class="p1">{{item.title.rendered}}</p>
              <p class="p2">{{formatTags(item.tags)}}</p>
            </div>
          </router-link>
        </el-col>
      </el-row>
      <el-row>
        <el-button v-if="more" @click="getMore">更多</el-button>
        <p class="foot" v-else>--没有更多了--</p>
      </el-row>
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
        a: {
          bannerImg: require('@/images/3.jpg'),
          catId: 5
        },
        b: {
          bannerImg: require('@/images/3.jpg'),
          catId: 6
        },
        c: {
          bannerImg: require('@/images/3.jpg'),
          catId: 10
        },
        d: {
          bannerImg: require('@/images/3.jpg'),
          catId: 4
        },
        e: {
          bannerImg: require('@/images/3.jpg'),
          catId: 7
        },
        f: {
          bannerImg: require('@/images/3.jpg'),
          catId: 8
        }
      },
      caseList: [],
      currentPage: 1,
      more: true
    }
  },
  computed: {
    banner () {
      return this.bannerList[this.id].bannerImg
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
      let id = this.bannerList[this.id].catId

      API.getCatPosts(id, this.currentPage)
        .then(res => {
          console.log(res)
          this.caseList = this.caseList.concat(res.data)
          // this.caseList = this.caseList.concat(this.caseList);
        })
        .catch(err => {
          // console.log(err);
          this.more = false
        })
    },
    getMore () {
      this.currentPage++
      this.getData()
    },
    formatTags (string) {
      let arr = string.split('/')
      arr.pop()
      return arr.join(' / ')
    }
  }
}
</script>
<style lang="less" scoped>
@import "../less/variable.less";
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
  .section-title {
    padding: 0.3rem 0;
  }
  .case-wrapper {
    background: #f1f1f1;
    padding-top: 0.3rem;
  }
  .case-list {
    max-width: 1450px;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    @base: 0.85rem;
    .case-item {
      background: #fff;
      margin: 10px auto;
      width: 4 * @base;
      cursor: pointer;
      border-radius: 0.03rem;
      overflow: hidden;
      .case-content {
        .background-cover();
        // background-size: 80% 80%;
        background-color: #ddd;
        height: 3 * @base;
      }
      .case-title {
        border: 1px solid #fff;
        box-sizing: border-box;
        text-align: left;
        padding: 25px 0 25px 20px;
        .p1 {
          color: #555;
          font-size: 15px;
          line-height: 30px;
          font-weight: bold;
        }
        .p2 {
          font-size: 12px;
          line-height: 30px;
          color: #aaa;
          height: 30px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .case-list {
      .case-item {
        width: 90%;
      }
    }
  }
}
.foot{
  color: #666;
  line-height: 50px;
  font-size: 15px;

}
</style>
