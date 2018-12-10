<template>
  <article class="case-article" id="case-article">
    <div v-if="showTitle" class="case-title">{{caseInfo.title}}</div>
    <div v-html="caseInfo.content"></div>
  </article>
</template>
<script>
export default {
  props: {
    caseInfo: {
      type: Object,
      default: {}
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  created () {},
  mounted () {}
}
</script>

<style lang="less">
@import "../less/wp-article.less";

#case-article {
  background: #fff;
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
  img {
    max-width: 100%;
    height: auto;
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
