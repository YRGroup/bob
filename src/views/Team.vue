<template>
  <div class="case-page">
    <bob-header type="home"></bob-header>
    <div class="team-content">

      <people-card
        v-for="(item,index) in teamImg" 
        :key="index"
        :defaultImg="item.img1"
        :hoverImg="item.img2"
        :class="[index!=activeIndex&&hover?'disabled':'','people-card','people'+(index+1)]"
        @enter="enter(index)"
        @leave="leave"
        >

      </people-card>
    </div>
    <bob-footer></bob-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import bobHeader from "@/components/bobHeader.vue";
import bobFooter from "@/components/bobFooter.vue";
import peopleCard from "@/components/peopleCard.vue";
import API from "@/api/index";

let lazyImg = require("@/images/nodata.jpg");
export default {
  name: "team",
  components: {
    bobHeader,
    bobFooter,
    peopleCard
  },
  data() {
    return {
      teamImg: [
        {
          img1: require("@/images/team/k.png"),
          img2: require("@/images/team/k1.png")
        },
        {
          img1: require("@/images/team/j.png"),
          img2: require("@/images/team/j1.png")
        },
        {
          img1: require("@/images/team/i.png"),
          img2: require("@/images/team/i1.png")
        },
        {
          img1: require("@/images/team/h.png"),
          img2: require("@/images/team/h1.png")
        },
        {
          img1: require("@/images/team/g.png"),
          img2: require("@/images/team/g1.png")
        },
        {
          img1: require("@/images/team/a.png"),
          img2: require("@/images/team/a1.png")
        },
        {
          img1: require("@/images/team/b.png"),
          img2: require("@/images/team/b1.png")
        },
        {
          img1: require("@/images/team/c.png"),
          img2: require("@/images/team/c1.png")
        },
        {
          img1: require("@/images/team/d.png"),
          img2: require("@/images/team/d1.png")
        },
        {
          img1: require("@/images/team/e.png"),
          img2: require("@/images/team/e1.png")
        },
        {
          img1: require("@/images/team/f.png"),
          img2: require("@/images/team/f1.png")
        }
      ],
      activeIndex: 0,
      hover: false
    };
  },
  computed: {},

  created() {},
  mounted() {},
  methods: {
    enter(index) {
      this.hover = true;
      this.activeIndex = index;
    },
    leave() {
      this.hover = false;
    }
  }
};
</script>
<style lang="less" scoped>
@import "../less/variable.less";
@import "../less/mixin.less";

.team-content {
  height: 1000px;
  // background: #fff;
  // width: 1300px;
  background-image: url("../images/team/teamBg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  position: relative;
  .people-card {
    position: absolute;
    transition: all 0.3s;
    &.disabled {
      opacity: 0.5;
      filter: blur(5px);
      // z-index: 0;
    }
    @bottom: 550px;
    @bottom2: @bottom+150px;

    &:nth-of-type(1) {
      left: 30%;
      bottom: @bottom2;
      margin-left: -76px;
    }
    &:nth-of-type(2) {
      left: 40%;
      bottom: @bottom2;
      margin-left: -56px;
    }
    &:nth-of-type(3) {
      left: 50%;
      bottom: @bottom2;
      margin-left: -76px;
    }
    &:nth-of-type(4) {
      right: 40%;
      bottom: @bottom2;
      margin-right: 36px;
    }
    &:nth-of-type(5) {
      right: 30%;
      bottom: @bottom2;
      margin-right: 36px;
    }

    &:nth-of-type(6) {
      left: 20%;
      bottom: @bottom;
      margin-left: 50px;
    }
    &:nth-of-type(7) {
      left: 30%;
      bottom: @bottom;
      // margin-left: -76px;
    }
    &:nth-of-type(8) {
      left: 40%;
      bottom: @bottom;
      // margin-left: -76px;
    }

    &:nth-of-type(9) {
      right: 50%;
      bottom: @bottom;
      margin-right: -76px;
    }
    &:nth-of-type(10) {
      right: 40%;
      bottom: @bottom;
      margin-right: -76px;
    }
    &:nth-of-type(11) {
      right: 30%;
      bottom: @bottom;
      margin-right: -76px;
    }
  }
}

.fadeBottom-enter-active,
.fadeBottom-leave-active {
  transition: all 0.5s;
  // transform: translateX(0);
}

.fadeBottom-enter,
.fadeBottom-leave-to {
  transform: translateY(50%);
  opacity: 0;
}
</style>
