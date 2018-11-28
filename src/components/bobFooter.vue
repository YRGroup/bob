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
          <p>郑东新区祥盛街8号 福晟国际大厦1层</p>
          <p>0371-61875269</p>
        </div>
        <div class="codeImg">
          <img src="../images/codeImg.png" alt="">
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" class="item foot-logo flex flex-column">
        <div class="footerlogo">
          <img src="../images/logoFooter.png" alt="">
          <p>To energize those  who made<br>
          relentless and respectable efforts <br>
          to uplift humanity.<p>
          <p>
            赋能那些为人性光辉<br>
            付出努力的个人和组织。
          </p>
        </div>
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
  background: #2e2e2e;
  .content {
    margin: 0 auto;
    padding-top: 0.3rem;
    color: #9d9d9d;
    line-height: 30px;
    font-size: @font-size-l;
    max-width: 1500px;
    .item {
      margin-bottom: 0.3rem;
    }
    .item-title {
      color: #fff;
      font-size: 16px;
    }
    .item-content {
      font-size: 15px;
    }
    .codeImg {
      margin: 20px auto;
      text-align: center;
      img {
        width: 1rem;
      }
    }
    .footerlogo {
      align-items: center;
      text-align: left;
      p {
        margin-top: 10px;
        font-size: 14px;
        line-height: 26px;
      }
      img {
        height: 0.5rem;
        opacity: .7;
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
    .footerlogo {
      p {
        display: none;
      }
    }
  }
}
</style>
