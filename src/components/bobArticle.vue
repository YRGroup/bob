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
  background: #fdfdfd;
  max-width:900px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  position: relative;
  p {
    img {
      // max-width: 100%;
      width: 100%;
      height: auto;
    }
  }
}
</style>

