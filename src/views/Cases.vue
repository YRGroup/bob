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
        <el-col v-for="item in caseList" :lg="6" :md="8" :sm="12" :xs="12" :key="item.id">
          <router-link class="case-item"  tag="div" :to="`/case/${item.id}`">
            <div class="case-content" :style="{backgroundImage:`url(${item.thumbnailurl})`}">
              
            </div>
            <div class="case-title">
              <p class="p1">{{item.title.rendered}}</p>
              <!-- <p class="p2">高端网站定制</p> -->
            </div>
          </router-link>
        </el-col>
      </el-row>  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from "@/components/bobHeader.vue";

import API from "@/api/index";

export default {
  name: "home",
  components: {
    bobHeader
  },
  data() {
    return {
      id: "",
      bannerList: {
        a: {
          bannerImg: require("@/images/3.jpg"),
          catId: 5
        },
        b: {
          bannerImg: require("@/images/3.jpg"),
          catId: 6
        },
        c: {
          bannerImg: require("@/images/3.jpg"),
          catId: 10
        },
        d: {
          bannerImg: require("@/images/3.jpg"),
          catId: 4
        },
        e: {
          bannerImg: require("@/images/3.jpg"),
          catId: 7
        },
        f: {
          bannerImg: require("@/images/3.jpg"),
          catId: 8
        }
      },
      caseList: []
    };
  },
  computed: {
    banner() {
      return this.bannerList[this.id].bannerImg;
    }
  },

  created() {
    this.id = this.$route.params.id;

    if (!this.id) {
      this.$router.push("/");
    }
    this.getData();
  },
  methods: {
    getData() {
      let id = this.bannerList[this.id].catId;
      API.getCatPosts(id)
        .then(res => {
          console.log(res);
          this.caseList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
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
        font-size: 0.8rem;
      }
      .p2 {
        font-size: 15px;
        line-height: 60px;
        opacity: .8;
      }
      .p3 {
        opacity: .6;
        span {
          display: inline-block;
          padding: 0 20px;
          border-radius: 40px;
          line-height: 36px;
          border: 1px solid #fff;
          margin: 30px 10px 0;
          font-size: 0.11rem;
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
    max-width: 1500px;
    margin: 0 auto;
    .case-item {
      background: #fff;
      margin: 10px auto;
      width: 2.3rem;
      cursor: pointer;
      border-radius: 0.03rem;
      overflow: hidden;
      .case-content {
        .background-cover();
        // background-size: 80% 80%;
        height: 1.5rem;
        .p1 {
        }
        .p2 {
        }
      }
      .case-title {
        border: 1px solid #fff;
        box-sizing: border-box;
        font-size: 15px;
        line-height: 50px;
        color: #333;
      }
    }
  }
}
</style>
