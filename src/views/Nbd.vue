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
              @handle="showDetail(posts[index].id)"
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
import nbdItem from "@/components/nbdItem.vue";

import API from "@/api/index";
import nbd from "@/assets/nbd";
import { WOW } from "wowjs";
const NBD_CAT_ID = 44;
export default {
  name: "nbd",
  components: {
    bobHeader,
    bobFooter,
    peopleCard,
    nbdItem
  },
  data() {
    return {
      nbd: nbd,
      posts: []
    };
  },
  computed: {},
  created() {
    this.getPosts();
  },
  mounted() {
    new WOW().init();
  },
  methods: {
    showDetail(id) {
      console.log(id);
      this.$router.push({
        path: "/nbddetail/" + id
      });
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
    background: url("../images/nbd/banner.png") no-repeat;
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
}
@keyframes bounceInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(100px);
  }

  50% {
    opacity: 1;
    -webkit-transform: translateY(-30px);
  }

  75% {
    -webkit-transform: translateY(10px);
  }

  100% {
    -webkit-transform: translateY(0);
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
