<template>
  <div class="nbd-page">
    <bob-header type="home"></bob-header>
    <div class="nbd-banner flex-column">
      <p class="p1 wow bounceInDown" data-wow-duration="1s">
        <img src="../images/nbd/nbd1.png" alt>
      </p>
    </div>
    <div class="section2">
      <h5>
        开发流程
        <span>/ Development Workflow</span>
      </h5>
      <div class="content flex">
        <div class="item" v-for="(item, index) in nbd" :key="index">
          <transition name="fade" appear>
            <nbd-item
              @handle="showDetail(posts[index].id,index)"
              :item="item"
              :style="{transitionDelay:`${index*0.1}s`}"
              :showArrow="index?true:false"
            ></nbd-item>
          </transition>
        </div>
      </div>
    </div>

    <bob-footer></bob-footer>
    <transition name="fade">
      <div class="slideDialog" v-show="showSideDialog">
        <div class="dialogContent">
          <div class="dialoHeader">
            <p>Analytics</p>
          </div>
          <ul class="nav-list">
            <li
              :class="['item',index==currentIndex&&'active']"
              v-for="(item, index) in nbd"
              :key="index"
              @click="handleNavItem(index)"
            >{{item.name}}</li>
            <li class="item closenbd" @click="handleClose">
               <i class="iconfont">&#xe604;</i>
            </li>
          </ul>
          <bob-article :showTitle="false" v-if="post&&post.content" :caseInfo="post"></bob-article>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from "@/components/bobHeader.vue";
import bobFooter from "@/components/bobFooter.vue";
import peopleCard from "@/components/peopleCard.vue";
import bobArticle from "@/components/bobArticle.vue";
import nbdItem from "@/components/nbdItem.vue";
import Case from "@/class/case";
import API from "@/api/index";
import nbd from "@/assets/nbd";
import { WOW } from "wowjs";
import { initBody, hiddenBody } from "@/assets/utils.js";
const NBD_CAT_ID = 44;
export default {
  name: "nbd",
  components: {
    bobHeader,
    bobFooter,
    peopleCard,
    nbdItem,
    bobArticle
  },
  data() {
    return {
      nbd: nbd,
      posts: [],
      showSideDialog: false,
      currentIndex: -1
    };
  },
  computed: {
    post() {
      if (this.currentIndex != -1) {
        return new Case(this.posts[this.currentIndex]);
      }
    }
  },
  created() {
    this.getPosts();
  },
  mounted() {
    new WOW().init();
  },
  methods: {
    showDetail(id, index) {
      console.log(id);
      // this.$router.push({
      //   path: "/nbddetail/" + id
      // });
      this.showSideDialog = true;
      this.currentIndex = index;
      hiddenBody();
    },
    handleNavItem(index) {
      this.currentIndex = index;
    },
    handleClose() {
      this.showSideDialog = false;
      initBody();
    },
    getPosts() {
      API.getCatPosts(NBD_CAT_ID, 1, 9).then(res => {
        console.log(res);
        this.posts = res.data;
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../less/variable.less";
@import "../less/mixin.less";
h5 {
  font-size: 0.25rem;
  margin-bottom: 60px;
  span {
    font-size: 0.2rem;
    opacity: 0.5;
  }
}
.nbd-page {
  background: #fff;
  .nbd-banner {
    height: 620px;
    background: #ddd;
    position: relative;
    overflow: hidden;
    color: #fff;
    justify-content: space-around;
    overflow: hidden;
    // background: url("../images/nbd/banner.png") no-repeat;
    background: @color-theme;
  }
  .section2 {
    padding: 60px 0;
    overflow: hidden;
    height: 450px;
    .content {
      width: 1200px;
      margin: 0 auto;
      align-items: flex-start;
    }
  }
  .section3 {
    padding: 60px 0;
    background: @color-theme;
    overflow: hidden;
    h5 {
      font-size: 0.3rem;
      margin-bottom: 60px;
      color: #fff;
    }
    .content {
      width: 1250px;
    }
  }
  .slideDialog {
    // background: #333;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);
    .dialogContent {
      height: 100%;
      background: #fff;
      overflow: scroll;
      position: relative;
      .dialoHeader{
        background: url("../images/nbd/headerBg.jpg") no-repeat;
        height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
          display: inline-block;
          width: 900px;
          text-align: left;
          color: #fff;
          font-size: .3rem;
          opacity: .7;
        }
      }
      .nav-list {
        // margin: 20px auto;
        position: fixed;
        right: 160px;
        top: 160px;
        .item {
          // display: inline-block;
          width: 50px;
          height: 50px;
          border: 1px solid @color-theme;
          color: @color-theme;
          border-radius: 50%;
          line-height: 50px;
          margin: 10px 0;
          cursor: pointer;
          transition: all 0.3s;
          &:hover {
            color: #fff;
            background: @color-theme;
          }
          &.active {
            color: #fff;
            background: @color-theme;
          }

        }
        .closenbd{
          color: #fff;
          background: @color-theme;
        }
      }
      .close {
        position: absolute;
        right: 30px;
        top: 30px;
        font-size: 30px;
        cursor: pointer;
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
