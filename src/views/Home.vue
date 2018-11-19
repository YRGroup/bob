<template>
  <div class="home">
    <bob-header type="home"></bob-header>
    <bob-banner></bob-banner>
    <bob-service></bob-service>
    <bob-aboutus></bob-aboutus>
    <bob-team></bob-team>
    <bob-data></bob-data>
    <bob-footer></bob-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from '@/components/bobHeader.vue'
import bobBanner from '@/components/bobBanner.vue'
import bobService from '@/components/bobService.vue'
import bobAboutus from '@/components/bobAboutus.vue'
import bobData from '@/components/bobData.vue'
import bobFooter from '@/components/bobFooter.vue'
import bobTeam from '@/components/bobTeam.vue'

export default {
  name: 'home',
  components: {
    bobHeader,
    bobBanner,
    bobService,
    bobAboutus,
    bobData,
    bobTeam,
    bobFooter
  },
  created () {

  }
}
</script>
<style lang="less" scoped>
// @import "../less/mixin.less";
.home {
  position: relative;
  background: #fff;
}

</style>
