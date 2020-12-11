<template>
  <section class="wrapper">
    <div>
      <my-rated :ratedList="ratedList" />
      <my-movie-list :movieList="movieList" :isToBottom="isToBottom" />
    </div>
  </section>
</template>

<script>
// import http from "@/utils/http";
import BetterScroll from "better-scroll";

// import { mapState } from "vuex";

// 引入qs，用于fetch的post请求
// import qs from "qs";
import {
  // getRatedListApi,
  // getMovieListApi,
  getMovieListMoreApi
} from "@/utils/api";

import MyRated from "com/home/MyRated";
import MyMovieList from "com/home/MyMovieList";

export default {
  data() {
    return {
      // ratedList: [],
      // movieList: [],
      // 电影总条数
      // count: 0,
      // 所有电影的id
      // ids: [],
      // 从哪个id开始
      start: 0,
      // 每次获取条数
      num: 5
    };
  },
  components: {
    MyRated,
    MyMovieList
  },
  mounted() {
    // this.getRatedList();
    this.$store.dispatch("getRatedList");
    // this.getMovieList();
    this.$store.dispatch("getMovieList").then(async () => {
      await this.$nextTick();
      let bs = new BetterScroll(".wrapper", {
        scrollX: false,
        scrollY: true,
        click: true,
        pullUpLoad: true
      });
      bs.on("pullingUp", async () => {
        // 整理字符串
        const arr = this.ids.slice(this.start, this.start + this.num);
        const str = arr.join();
        // 请求数据
        const res = await getMovieListMoreApi({
          ids: str
        });
        // 将请求到的数据和之前的数据做合并
        // this.movieList = this.movieList.concat(res.result);
        this.$store.commit("concatMovieList", res.result);
        this.start += this.num;
        // 需要重新计算better-scroll的高度
        await this.$nextTick();
        bs.refresh();
        // 表示这次下拉结束了，可以进行下一次的下拉了
        if (this.start <= this.count) {
          bs.finishPullUp();
        }
      });
    });
  },
  computed: {
    // ...mapState(["ratedList", "movieList", "count", "ids"]),
    ratedList() {
      return this.$store.state.moduleHot.ratedList;
    },
    movieList() {
      return this.$store.state.moduleHot.movieList;
    },
    count() {
      return this.$store.state.moduleHot.count;
    },
    ids() {
      return this.$store.state.moduleHot.ids;
    },
    isToBottom() {
      return this.start > this.count;
    }
  },
  methods: {
    // fn(url, params) {
    //   return fetch("http://pudge.wang:3080/api/rated/list?a=1&b=2").then(response =>
    //     response.json()
    //   );
    // },
    // 获取最受欢迎列表
    // async getRatedList() {
    //   const res = await getRatedListApi();
    //   this.ratedList = res.result;
    // },
    // 首页的电影列表
    // async getMovieList() {
    //   const res = await getMovieListApi();
    //   this.movieList = res.result;
    //   this.count = res.count;
    //   this.ids = res.ids;
    //   this.start = this.movieList.length;
    //   // this.$nextTick就是页面渲染完毕才做的事情,里面是回调函数
    //   // this.$nextTick(() => {
    //   //   // 实例化better-scroll，第一个参数是父元素的类名，第二个参数是对象，里面是配置项
    //   //   new BetterScroll(".wrapper", {
    //   //     scrollX: false,
    //   //     scrollY: true,
    //   //     click: true
    //   //   });
    //   // });
    //   await this.$nextTick();
    //   const bs = new BetterScroll(".wrapper", {
    //     scrollX: false,
    //     scrollY: true,
    //     click: true,
    //     pullUpLoad: true
    //   });
    //   // 监听滚动到底的事件
    //   bs.on("pullingUp", async () => {
    //     // 整理字符串
    //     const arr = this.ids.slice(this.start, this.start + this.num);
    //     const str = arr.join();
    //     // 请求数据
    //     const res = await getMovieListMoreApi({
    //       ids: str
    //     });
    //     // 将请求到的数据和之前的数据做合并
    //     this.movieList = this.movieList.concat(res.result);
    //     this.start += this.num;
    //     // 需要重新计算better-scroll的高度
    //     await this.$nextTick();
    //     bs.refresh();
    //     // 表示这次下拉结束了，可以进行下一次的下拉了
    //     if (this.start <= this.count) {
    //       bs.finishPullUp();
    //     }
    //   });
    // }
  }
};
</script>
<style lang="scss" scoped>
section.wrapper {
  position: absolute;
  top: 96px;
  left: 0;
  right: 0;
  bottom: 48px;
  overflow: hidden;
}
</style>
