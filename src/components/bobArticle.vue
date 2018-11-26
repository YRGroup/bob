<template>
  <article class="case-article" id="acticle">
    <slot></slot>
  </article>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {},
  mounted () {
    
  }
}
</script>

<style lang="less">
.case-article {
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

  img {
    max-width: 100%;
    // width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    p {
      line-height: 28px;
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
  @media (max-width: 760px) {
    font-size: 0.2rem;
    .wp-video {
      video {
        max-width: 100%;
      }
    }
  }
}
</style>
