<template>
  <div class="nbddetail">
    <bob-header></bob-header>
    <div class="content">
      <bob-article :caseInfo="post"></bob-article>
    </div>
    <bob-footer></bob-footer>
  </div>
</template>
<script>
import { info } from '@/assets/info'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import API from '@/api/index'
import bobHeader from '@/components/bobHeader.vue'
import bobArticle from '@/components/bobArticle.vue'
import bobFooter from '@/components/bobFooter.vue'
import Case from '@/class/case'
// import * as THREE from "three";
// import * as TWEEN from "tween";
// console.log(THREE);

const NBD_CAT_ID = 44
export default {
  name: 'nbddetail',
  components: {
    bobHeader,
    bobFooter,
    swiper,
    swiperSlide,
    bobArticle
  },
  data () {
    return {
      id: '',
      posts: [],
      post: {}
    }
  },
  computed: {},
  created () {
    this.id = this.$route.params.id
    console.log(this.$route)
    if (!this.id) {
      this.$router.push('/')
    }
    // this.getPosts();
  },
  mounted () {},
  methods: {
    getPosts () {
      API.getCatPosts(NBD_CAT_ID, 1, 9).then(res => {
        console.log(res)
        this.posts = res.data
      })
    },
    getPost (id) {
      API.getPost(id).then(res => {
        console.log(res)
        this.post = new Case(res.data)
      })
    }
  },
  watch: {
    id (newVal) {
      this.getPost(newVal)
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.id
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
  .content {
    min-height: 600px;
  }
}
</style>
