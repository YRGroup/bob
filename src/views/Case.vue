<template>
  <div class="case-page">
    <bob-header></bob-header>

    <div v-if="caseInfo.content" v-html="caseInfo.content">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from '@/components/bobHeader.vue'

import API from '@/api/index'
import Case from '@/class/case'
export default {
  name: 'home',
  components: {
    bobHeader
  },
  data () {
    return {
      id: '',
      caseInfo: {}
    }
  },
  computed: {},

  created () {
    this.id = this.$route.params.id

    if (!this.id) {
      this.$router.push('/')
    }
    this.getData()
  },
  methods: {
    getData () {
      API.getPost(this.id)
        .then(res => {
          console.log(res)

          this.caseInfo = new Case(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="less" scoped>
@import "../less/variable.less";
@import "../less/mixin.less";

.case-page {
  background: #333;

}
</style>
