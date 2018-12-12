<template>
  <div class="nbddetail">
    <bob-header></bob-header>
    <div class="nbd-banner"></div>
    <div class="flex detail-content">
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
import { info } from "@/assets/info";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import API from "@/api/index";
import bobHeader from "@/components/bobHeader.vue";
import bobArticle from "@/components/bobArticle.vue";
import bobFooter from "@/components/bobFooter.vue";
import bobSidebar from "@/components/bobSidebar.vue";
import Case from "@/class/case";
import nbd from "@/assets/nbd";
import { WOW } from "wowjs";
const NBD_CAT_ID = 44;
export default {
  name: "nbddetail",
  components: {
    bobHeader,
    bobFooter,
    swiper,
    swiperSlide,
    bobArticle,
    bobSidebar
  },
  data() {
    return {
      id: "",
      posts: [],
      post: {},
      nbd: nbd
    };
  },
  computed: {},
  created() {
    this.getPosts();
    this.id = this.$route.params.id;
    if (!this.id) {
      this.$router.push("/");
    }
    this.getPost(this.id);
  },
  mounted() {},
  methods: {
    getPosts() {
      API.getCatPosts(NBD_CAT_ID, 1, 9).then(res => {
        console.log(res);
        this.posts = res.data;
      });
    },
    getPost(id) {
      API.getPost(id).then(res => {
        console.log(res);
        this.post = new Case(res.data);
        this.$nextTick(() => {
          new WOW().init();
        });
      });
    },
    goback() {
      this.$router.push("/nbd");
    }
  },
  watch: {
    id(newVal) {
      this.getPost(newVal);
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id;
    next();
  }
};
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
    max-width: 1000px;
    img {
      max-width: 100%;
      vertical-align: bottom;
    }
  }
  .detail-content {
    align-items: flex-start;
    justify-content: space-around;
    padding: 50px 0;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 50px;
  }
  .nav-list {
    // position: absolute;
    // left: 150px;
    // top: 320px;

    .item {
      font-size: 16px;
      color: #707070;
      padding: 16px 20px;
      text-align: left;
      width: 180px;
      cursor: pointer;
      &.active {
        color: @color-theme;
        font-weight: 700;
        p {
          border-right: 2px solid @color-theme;
        }
      }
      .iconfont {
        margin-right: 10px;
        font-size: 19px;
      }
    }
  }
}
</style>
