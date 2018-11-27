<template>
  <div class="mteam-page">
    <bob-header type="home"></bob-header>
    <el-row class="item-row"> 
      <el-col 
        v-for=" (item, index) in sortPeople" 
        :key="index" 
        :span="index==10?24:12"
        @click.native="showCardHandle(item)"
        :data-wow-delay="index*.1 + 's'" 
        data-wow-duration="1s" 
        class="card wow bounceInUp">
        <img class="people-img" :src="require(`@/images/mteam/teamPhone_0${index+1}.jpg`)" alt="">  
      </el-col>
    </el-row>
    <bob-footer></bob-footer>
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
import {WOW} from 'wowjs'

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
      curentIndex: 0,
      sortPeople: [3, 9, 2, 1, 0, 8, 10, 7, 6, 5, 4]
    };
  },
  computed: {},

  created() {},
  mounted() {
    new WOW().init()
  },
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
  background: #757575;
  padding-top: 50px;
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
