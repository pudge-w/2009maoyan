<template>
  <div>
    <div
      class="detail"
      :style="{ background: detailData.backgroundColor }"
      v-if="detailData.nm"
    >
      <p class="title">猫眼电影 > {{ detailData.nm }}</p>
      <div class="content">
        <img class="content-img" :src="detailData.img | formatUrl" alt="" />
        <div class="content-right">
          <h2>{{ detailData.nm }}</h2>
          <h5>{{ detailData.enm }}</h5>
          <h5>{{ detailData.cat | formatCat }}</h5>
          <h5>{{ detailData.star | formatCat }}</h5>
          <h5>{{ detailData.pubDesc + detailData.dur + "分钟 >" }}</h5>
          <div class="buttonGroup">
            <div class="button">想看</div>
            <div class="button">看过</div>
          </div>
        </div>
      </div>

      <div class="score">
        <div class="score-title">
          <span style="float: left">实时口碑</span>
          <span style="float: right">
            {{ detailData.watched }}人看过 {{ detailData.wish }}人想看
          </span>
        </div>
        <div class="middle">
          <div>{{ detailData.sc }}分{{ detailData.snum }}</div>
          <div>
            <stars-bar
              v-for="(item, index) in detailData.distributions"
              :key="index"
              :starsCount="3 - index"
              :proportion="item.proportion"
            />
          </div>
        </div>
      </div>
      <button @click="more">按钮</button>
    </div>

    <!-- <div v-else>
      加载中。
    </div> -->
  </div>
</template>

<script>
import { getMovieDetailApi } from "../utils/api";
import StarsBar from "../components/detail/StarsBar";

export default {
  // props: ["movieId"],
  data() {
    return {
      id: "",
      detailData: {}
    };
  },
  components: {
    StarsBar
  },
  filters: {
    formatUrl(val) {
      return val.split("/w.h").join("");
    },
    formatCat(val) {
      return val.split(",").join("/");
    }
  },
  created() {
    this.id = this.$route.params.movieId;
  },
  mounted() {
    // this.getDetailData();
  },
  async beforeRouteEnter(to, from, next) {
    // ...拿不到this,拿到vm
    const res = await getMovieDetailApi({ id: to.params.movieId });
    // console.log(to);
    next(vm => {
      vm.detailData = res.result;
    });
  },
  beforeRouteUpdate(to, from, next) {
    // console.log(to);
    this.id = to.params.movieId;
    this.getDetailData();
    next();
  },
  methods: {
    async getDetailData() {
      // 请求数据
      const res = await getMovieDetailApi({ id: this.id });
      this.detailData = res.result;
    },
    more() {
      this.$router.push("/detail/1240838");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/var.scss";
.detail {
  padding: 0 15px;
  overflow: hidden;
  color: #ccc;
  font-size: 12px;

  .title {
    font-size: 14px;
    margin: 15px 0;
  }

  .content {
    width: 100%;
    height: 138px;
    display: flex;
    justify-content: space-between;

    .content-img {
      width: 100px;
      height: 100%;
    }

    .content-right {
      width: 230px;
      height: 100%;

      h2 {
        color: #fff;
        font-size: 20px;
      }

      h5 {
        margin: 6px 0;
      }

      .buttonGroup {
        height: 30px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .button {
          width: 45%;
          height: 100%;
          background: rgba(255, 255, 255, 0.35);
          border-radius: 4px;
          @include center;
        }
      }
    }
  }

  .score {
    width: 100%;
    margin-top: 15px;
    padding: 10px 12px;
    background: rgba(0, 0, 0, 0.2);

    .score-title {
      height: 18px;
    }

    .middle {
      height: 128px;
      padding: 20px 0;
    }
  }
}
</style>
