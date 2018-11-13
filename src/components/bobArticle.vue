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
  background: #fafafa;
  max-width:1200px;
  padding: 0 50px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  position: relative;
  text-align: left;
  p {
    img {
      // max-width: 100%;
      width: 100%;
      height: auto;
    }
  }
}
</style>

