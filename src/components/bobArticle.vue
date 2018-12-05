<template>
  <article class="case-article" id="acticle">
    <div class="case-title">{{caseInfo.title}}</div>
    <div v-html="caseInfo.content"></div>
  </article>
</template>
<script>
export default {
  props: {
    caseInfo: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {}
};
</script>

<style lang="less" >
@import "../less/wp-article.css";
#acticle {
  background: #fff;
  max-width: 900px;
  padding: 0.2rem 0.2rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
  text-align: left;
  line-height: 24px;
  .case-title {
    font-size: 0.2rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 50px;
  }
  p {
    // line-height: 28px;
    // // text-align: ceil()
  }
  img {
    max-width: 100%;
    // width: 100%;
    height: auto;
    // display: block;
    margin: 0 auto;
  }

  @media (max-width: 760px) {
    font-size: 0.2rem;
    .wp-video {
      video {
        max-width: 100%;
      }
    }
  }
}
  .wp-video {
    max-width: 100%;
    text-align: center;
    video {
      object-fit: cover;
      max-width: 80%;
      height: auto;
    }
  }
</style>
