<template>
  <article class="case-article">
    <slot></slot>
  </article>
</template>
<script>
export default {};
</script>

<style lang="less">
.case-article {
  background: #fff;
  max-width:1200px;
  padding: 30px 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
  text-align: left;
  p {
    line-height: 24px;
    img {
      // max-width: 100%;
      width: 100%;
      height: auto;
    }
  }
}
</style>

