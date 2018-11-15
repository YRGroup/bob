<template>
  <div class="case-page">
    <bob-header type="cases"></bob-header>
    <div class="case-content">
      <div class="case-banner" >
        <div class="bg" :style="{backgroundImage:`url(${caseInfo.banner})`}"></div>
        <div class="desc">
          <p class="p1">{{caseInfo.title}}</p>    
          <p class="p2">{{caseInfo.tag}}</p> 
        </div>
      </div>
      <bob-article  v-if="caseInfo.content">
        <div v-html="caseInfo.content">> 
        </div>
      </bob-article>
    </div>
    <div class="side-bar">
      <div class="tag" @click="back()">

      </div>
      <div class="tag" @click="top()">22</div>
    </div>
    <bob-footer></bob-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from "@/components/bobHeader.vue";
import bobFooter from "@/components/bobFooter.vue";
import bobArticle from "@/components/bobArticle.vue";
import API from "@/api/index";
import Case from "@/class/case";
export default {
  name: "home",
  components: {
    bobHeader,
    bobFooter,
    bobArticle
  },
  data() {
    return {
      id: "",
      caseInfo: {}
    };
  },
  computed: {},

  created() {
    this.id = this.$route.params.id;

    if (!this.id) {
      this.$router.push("/");
    }
    this.getData();
  },
  methods: {
    getData() {
      API.getPost(this.id)
        .then(res => {
          console.log(res);

          this.caseInfo = new Case(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    back() {
      this.$router.back();
    },
    top() {
      window.scrollTo(0, 0);
    }
  }
};
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
    height: 2.5rem;
    position: relative;
    overflow: hidden;
    .bg {
      .background-cover();
      filter: blur(10px);
      position: absolute;
      left: -10px;
      top: -10px;
      right: -10px;
      bottom: -10px;
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
      color: #333;
      z-index: 2;
      text-align: left;
      .p1 {
        font-size: 0.3rem;
        line-height: 0.5rem;
      }
      .p2 {
        font-size: 13px;
      }
    }
  }
  .side-bar {
    position: fixed;
    right: 5%;
    bottom: 30%;
    .tag {
      width: 0.4rem;
      height: 0.4rem;
      background: #fff;
      line-height: 0.4rem;
      text-align: center;
      margin: 10px 0;
      border: 1px solid #aaa;
    }
  }
}
</style>
