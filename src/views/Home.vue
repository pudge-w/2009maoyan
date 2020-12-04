<template>
  <div>
    <my-header :hasBack="false" />
    <my-nav-tab />
    <my-rated :ratedList="ratedList" />
    <my-movie-list :movieList="movieList" />
    <footer></footer>
  </div>
</template>

<script>
// import http from "@/utils/http";
import { getRatedListApi, getMovieListApi } from "@/utils/api";

import MyHeader from "com/home/MyHeader";
import MyNavTab from "com/home/MyNavTab";
import MyRated from "com/home/MyRated";
import MyMovieList from "com/home/MyMovieList";

export default {
  data() {
    return {
      ratedList: [],
      movieList: []
    };
  },
  components: {
    MyHeader,
    MyNavTab,
    MyRated,
    MyMovieList
  },
  mounted() {
    this.getRatedList();
    this.getMovieList();
  },
  methods: {
    // fn(url, params) {
    //   return fetch("http://pudge.wang:3080/api/rated/list?a=1&b=2").then(response =>
    //     response.json()
    //   );
    // },

    // 获取最受欢迎列表
    async getRatedList() {
      const res = await getRatedListApi();
      if (res.status === 0) {
        this.ratedList = res.result;
      }
    },
    // 首页的电影列表
    async getMovieList() {
      const res = await getMovieListApi();
      if (res.status === 0) {
        this.movieList = res.result;
      }
      // fetch("http://pudge.wang:3080/api/movies/list")
      //   .then(response => response.json())
      //   .then(res => {
      //     if (res.status === 0) {
      //       this.movieList = res.result;
      //     }
      //   });
    }
  }
};
</script>

<style lang="scss" scoped></style>
