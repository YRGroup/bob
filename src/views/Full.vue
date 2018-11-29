<template>
  <div class="team-page">
    <bob-header type="home"></bob-header>
    <div class="full-banner flex-column">
      <p class="p1">N B D</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from '@/components/bobHeader.vue'
import bobFooter from '@/components/bobFooter.vue'
import peopleCard from '@/components/peopleCard.vue'
// import API from '@/api/index'
import team from '@/assets/team'

let lazyImg = require('@/images/nodata.jpg')

export default {
  name: 'full',
  components: {
    bobHeader,
    bobFooter,
    peopleCard
  },
  data () {
    return {}
  },
  computed: {},

  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="less" >
@import "../less/variable.less";
@import "../less/mixin.less";
.full-banner {
  height: 600px;
  background: #ddd;
  position: relative;
  .background-cover();
  background-image: url("../images/about_bg2.jpg");
  color: #fff;
  justify-content: space-around;
  .p1 {
    font-size: 0.4rem;
  }
}
</style>
