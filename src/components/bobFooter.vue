<template>
  <footer class="footer container-fluid" id="footer">
    <el-row class="content row">
      <el-col :xs="24" :sm="8" class="item col-xs-12 col-sm-4">
        <p class="item-title"> SERVICE</p>
        <div class="item-content">
          <p>
            <router-link to="/service/a">Analytics</router-link>
          </p>
          <p>
            <router-link to="/service/b">Branding</router-link>
          </p>
          <p><router-link to="/service/c">Campaign</router-link></p>
          <p><router-link to="/service/d">Digital & web</router-link></p>
          <p> <router-link to="/service/e">Editorial</router-link></p>
          <p><router-link to="/service/f">Fabrication</router-link></p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" class="item col-xs-12 col-sm-4">
        <p class="item-title">CONTACT US</p>
        <div class="item-content">
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
  .content {
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
    // padding-bottom: 40px;
    color: #9d9d9d;
    line-height: 30px;
    font-size: 14px;
    .item {
      margin-bottom: 40px;
    }
    .item-title {
      color: #fff;
      font-size: 17px;
    }
    .item-content {
      font-size: 15px;
    }
    .codeImg {
      margin: 20px auto;
      text-align: center;
      img {
        width: 120px;
      }
    }
    .foot-logo {
      height: 100px;
      align-items: center;
      img {
        height: 100%;
      }
    }
  }

  .copyright {
    font-size: @font-size-s;
    background: #2a2a2a;
    color: #888;
    line-height: 35px;
  }
  @media (max-width: 768px) {
    .content {
      .codeImg {
        display: none;
      }
    }
  }
}
</style>
