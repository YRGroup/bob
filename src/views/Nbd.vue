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
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from "@/components/bobHeader.vue";
import bobFooter from "@/components/bobFooter.vue";
import peopleCard from "@/components/peopleCard.vue";
import bobArticle from "@/components/bobArticle.vue";
import bobStar from "@/components/bobStar.vue";
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
    bobArticle,
    bobStar
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
        let post = this.posts[this.currentIndex];
        return new Case(post);
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
      // this.currentIndex = index;
      this.$router.push("nbddetail/" + id);
      this.currentIndex = index;
      // hiddenBody();
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
    .p1 {
      position: absolute;
      z-index: 20;
    }
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
      .dialoHeader {
        background: url("../images/nbd/headerBg.jpg") no-repeat;
        height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          display: inline-block;
          width: 900px;
          text-align: left;
          color: #fff;
          font-size: 0.3rem;
          opacity: 0.7;
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
        .closenbd {
          // &.back {
          //   transform: rotate(-90deg);
          // }
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
      .case-article {
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        img {
          width: 100%;
          // max-width: 100%;
        }
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
