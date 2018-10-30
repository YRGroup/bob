<template>
  <div class="service" :style="{backgroundImage:'url('+img+')'}">
    <bob-header :id="id" :homeHeader="false"></bob-header>

  </div>
</template>
<script>
import bobHeader from "@/components/bobHeader.vue";
export default {
  name: "service",
  components: {
    bobHeader
  },
  data() {
    return {
      images: [
        require("@/images/A.png"),
        require("@/images/A.png"),
        require("@/images/A.png"),
        require("@/images/A.png"),
        require("@/images/A.png"),
        require("@/images/A.png")
      ],
      id: 0
    };
  },
  computed: {
    img() {
      return this.images[this.id - 1];
    }
  },
  created() {
    console.log(this.$route);
    this.id = Number(this.$route.params.id);

    if (!this.id) {
      this.$router.push("/");
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to);
    this.id = Number(to.params.id);
    next();
  }
};
</script>
<style lang="less" scoped>
@import "../less/mixin.less";
.service {
  .background-cover();
  height: 100vh;
  overflow: hidden;
}
.banner {
  width: 100%;
}
</style>
