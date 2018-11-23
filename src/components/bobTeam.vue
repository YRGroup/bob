<template>
  <section class="section5" id="section4">
    <!-- <h5 class="section-title">
      <span>有那么一群人 / <span class="en">our team</span> </span>
    </h5> -->
    <router-link to="/team">
      <div class="teamPic"></div>
    </router-link>
  </section>
</template>

<script>

export default {
  name: 'team',
  components: {

  },
  data () {
    return {}
  },
  computed: {

  },
  created () {
  },
  methods: {}
}
</script>
<style lang="less" scoped>
@import "../less/variable.less";
@import "../less/mixin.less";
@import "../less/common.less";

.section5{
  // padding: 0.5rem 0;

  .section-title{
      margin-bottom:0.2rem;
  }
  .teamPic{
      background: url("../images/team.jpg") no-repeat;
      height: 580px;
  }
}
</style>
