<template>
  <div>
    <my-header :hasBack="false" />
    <my-nav-tab />
    <my-rated :ratedList="ratedList" />
    <my-movie-list />
    <footer></footer>
  </div>
</template>

<script>
import MyHeader from "@/components/home/MyHeader";
import MyNavTab from "@/components/home/MyNavTab";
import MyRated from "@/components/home/MyRated";
import MyMovieList from "@/components/home/MyMovieList";

export default {
  data() {
    return {
      ratedList: []
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
  },
  methods: {
    getRatedList() {
      fetch("http://pudge.wang:3080/api/rated/list")
        .then(response => response.json())
        .then(res => {
          if (res.status === 0) {
            this.ratedList = res.result;
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
