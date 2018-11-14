<template>
  <article class="case-article" id="acticle">
    <slot></slot>
  </article>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    let article = document.getElementById("acticle");
    if (article.getElementsByTagName("img").length) {
      article.getElementsByTagName("img")[0].style.display = "none";
    }
  }
};
</script>

<style lang="less">
.case-article {
  background: #fff;
  max-width: 1200px;
  padding: 30px 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
  text-align: left;
  img {
    // max-width: 100%;
    width: 100%;
    height: auto;
    vertical-align: bottom;
    p {
      line-height: 24px;
    }
  }
}
</style>

