<template>
  <footer class="footer container-fluid" id="footer">
    <!-- <div class=" flex flex-column info">
      <p class="grey">如有任何疑问请联系我们，7*24小时为您服务！</p>
      <p class="phone">15811111111</p>
      <p>郑州新区祥盛街8号福晟国际2号楼</p>
      <div class="wrapper">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/codeImg.png" alt="codeImg">
      </div>
      <p class="grey">官方微信</p>
    </div> -->
    <el-row class="content row">
      <el-col :xs="24" :sm="8" class="item col-xs-12 col-sm-4">
        <p class="foot-title"> SERVICE</p>
        <div>
          <p>Analytics</p>
          <p>Branding</p>
          <p>Campaign</p>
          <p>Digital web</p>
          <p>Editorial</p>
          <p>Fabrication</p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" class="item col-xs-12 col-sm-4">
        <p class="foot-title">CONTACT US</p>
        <div>
          <p>郑东新区祥盛街8号福晟国际2号楼14F </p>
          <p>0371-55261585</p>
        </div>
        <div class="codeImg">
          <img src="../images/codeImg.png" alt="">
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" class="item foot-logo flex flex-column">
        <img src="../images/logoFooter.png" alt="">
      </el-col>
    </el-row>
    <p class="copyright">
      <a target="blank" href="http://www.miitbeian.gov.cn"> 豫ICP备16026588号</a>
      <span>&nbsp;&nbsp;&nbsp;勹卜文化传媒有限公司</span>
    </p>

  </footer>
</template>

<script>
export default {
  name: 'bobHeader',
  props: {
    msg: String
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toogleSideNav () {
      this.show = !this.show
      console.log(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../less/variable.less";
@import "../less/mixin.less";
@import "../less/common.less";

// footer
#footer {
  text-align: center;
  .background-cover();
  // background-image: url('../images/gloable.png');
  background: #2e2e2e;
  .content{
    max-width: 1500px;
  }
  .info {
    .background-cover();
    background-image: url("../images/gloable.png");
    padding: 50px;
    color: #fff;
    line-height: 30px;

    .phone {
      font-size: 30px;
      color: @color-theme;
      line-height: 45px;
    }

    .grey {
      color: #888;
    }

    .wrapper {
      // padding: 5px;
      border-radius: 10px;
      border: 1px solid #fff;
      background: #fff;
      overflow: hidden;
      margin-top: 10px;
    }
  }

  .content {
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 40px;
    color: #9d9d9d;
    line-height: 30px;
    .item {
      margin-bottom: 40px;
    }
    .foot-title {
      color: #fff;
      font-size: 14px;
    }

    .codeImg {
      margin: 20px 0;
    }
    .foot-logo {
      height: 100%;
      align-items: center;
    }
  }

  .copyright {
    font-size: @font-size-s;
    background: #2a2a2a;
    color: #888;
    line-height: 35px;
  }
}
</style>
