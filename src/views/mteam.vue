<template>
  <div class="mteam-page">
    <el-row class="item-row"> 
      <el-col 
        v-for=" (item, index) in 11" 
        :key="index" 
        :span="item==11?24:12"
        @click.native="showCardHandle(index)"
        class="card">
        <img class="people-img" :src="require(`@/images/mteam/teamPhone_0${item}.jpg`)" alt="">  
      </el-col>
    </el-row>
    <el-dialog
      custom-class="people-dialog"
      :show-close="false"
      :visible.sync="mydialog"
      >
      <people-info 
        :curentIndex="curentIndex">
      </people-info>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from "@/components/bobHeader.vue";
import bobFooter from "@/components/bobFooter.vue";
import peopleCard from "@/components/peopleCard.vue";
import peopleInfo from "@/components/peopleInfo.vue";
// import API from '@/api/index'
import team from "@/assets/team";

let lazyImg = require("@/images/nodata.jpg");

export default {
  name: "team",
  components: {
    bobHeader,
    bobFooter,
    peopleCard,
    peopleInfo
  },
  data() {
    return {
      team: team,
      mydialog: false,
      curentIndex: 0
    };
  },
  computed: {},

  created() {},
  mounted() {},
  methods: {
    showCardHandle(index) {
      this.mydialog = true;
      this.curentIndex = index;
    }
  }
};
</script>
<style lang="less" >
@import "../less/variable.less";
@import "../less/mixin.less";

.mteam-page {
  .people-dialog {
    width: 90%;
    max-width: 1000px;
    .el-dialog__header {
      display: none;
    }
    .el-dialog__body {
      padding: 0;
    }
  }
  .people-img {
    width: 100%;
    display: block;
  }
}
</style>
