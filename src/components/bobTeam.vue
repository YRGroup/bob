<template>
  <section class="section5" id="section4">
    <!-- <h5 class="section-title">
      <span>有那么一群人 / <span class="en">our team</span> </span>
    </h5> -->
    <router-link to="/team" class="hidden-sm-and-down" tag="div">
      <div class="teamPic">
        <img class="pic" src="../images/team.jpg" alt="我们的团队">
        <img class="phonePic" src="../images/teamPhone.jpg" alt="我们的团队">
      </div>
    </router-link>
    <router-link to="/mteam" class="hidden-md-and-up" tag="div">
      <div class="teamPic">
        <img class="pic" src="../images/team.jpg" alt="我们的团队">
        <img class="phonePic" src="../images/teamPhone.jpg" alt="我们的团队">
      </div>
    </router-link>
  </section>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
export default {
  name: 'team',
  components: {},
  data () {
    return {}
  },
  computed: {},
  created () {},
  methods: {}
}
</script>
<style lang="less" scoped>
@import "../less/variable.less";
@import "../less/mixin.less";
@import "../less/common.less";

.section5 {
  // padding: 0.5rem 0;

  .section-title {
    margin-bottom: 0.2rem;
  }
  .teamPic {
    // background: url("../images/team.jpg") no-repeat;
    // height: 580px;
    // max-width: 100%;
    // background-size: 100%;
    cursor: pointer;
    img {
      max-width: 100%;
      vertical-align: middle;
    }
    .phonePic {
      display: none;
    }
    @media (max-width: 768px) {
      .phonePic {
        display: block;
      }
      .pic {
        display: none;
      }
    }
  }
}
</style>
