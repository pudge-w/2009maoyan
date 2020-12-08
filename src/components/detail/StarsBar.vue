<template>
  <div class="stars-percent-bar">
    <div class="left">
      <img
        src="http://s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star-not-graded.png"
        alt=""
        v-for="(item, index) in starsCount"
        :key="index"
      />
    </div>
    <div class="center">
      <div class="bg">
        <div class="mark" :style="{ width: proportion + '%' }"></div>
      </div>
    </div>
    <div class="right">
      {{ proportion + "%" }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["starsCount", "proportion"],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.stars-percent-bar {
  width: 180px;
  height: 18px;
  margin: 4px 0;
  display: flex;

  .left {
    flex: 2;
    text-align: right;

    img {
      width: 7px;
      height: 7px;
      margin: 0 1px;
    }
  }

  .center {
    flex: 5;
    .bg {
      width: 100%;
      height: 12px;
      margin: 3px;
      background: rgba(255, 255, 255, 0.05);
      position: relative;

      .mark {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: orange;
      }
    }
  }

  .right {
    flex: 2;
  }
}
</style>
