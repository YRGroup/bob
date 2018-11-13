<template>
  <div class="case-page">
    <bob-header></bob-header>
    <div >

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from "@/components/bobHeader.vue";

import API from "@/api/index";
import Case from "@/class/case";
export default {
  name: "home",
  components: {
    bobHeader
  },
  data() {
    return {
      id: "",
      case: {}
    };
  },
  computed: {},

  created() {
    this.id = this.$route.params.id;

    if (!this.id) {
      this.$router.push("/");
    }
    this.getData();
  },
  methods: {
    getData() {
      API.getPost(this.id)
        .then(res => {
          console.log(res);

          this.case = new Case(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../less/variable.less";
@import "../less/mixin.less";

.case-page {
  background: #fff;
  .banner-bg {
    .background-cover();
    // background-image: url("../images/3.jpg");
    height: 800px;
    .flex-column();
    .content {
      // height: 100%;
      padding: 0 0.5rem;
      color: #fff;
      .p1 {
        font-size: 0.6rem;
      }
      .p2 {
        font-size: 15px;
        line-height: 60px;
        color: #ddd;
      }
      .p3 {
        span {
          display: inline-block;
          padding: 0 10px;
          border-radius: 20px;
          line-height: 40px;
          border: 1px solid #fff;
          margin: 30px 10px 0;
          font-size: 0.12rem;
        }
      }
    }
  }
  .section-title {
    padding: 0.3rem 0;
  }
  .case-wrapper {
    background: #f1f1f1;
    padding-top: 0.3rem;
  }
  .case-list {
    max-width: 1500px;
    margin: 0 auto;
    .case-item {
      background: #fff;
      margin: 10px auto;
      width: 2.3rem;
      cursor: pointer;
      border-radius: 0.03rem;
      overflow: hidden;
      .case-content {
        .background-cover();
        // background-size: 80% 80%;
        height: 1.5rem;
        .p1 {
        }
        .p2 {
        }
      }
      .case-title {
        border: 1px solid #fff;
        box-sizing: border-box;
        font-size: 15px;
        line-height: 50px;
        color: #333;
      }
    }
  }
}
</style>
