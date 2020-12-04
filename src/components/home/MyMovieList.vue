<template>
  <div class="movie-list">
    <ul>
      <my-movie-item
        v-for="item in movieList"
        :key="item.movieid"
        :item="item"
      ></my-movie-item>
    </ul>
  </div>
</template>

<script>
import MyMovieItem from "com/home/MyMovieItem";

export default {
  props: {
    movieList: Array
  },
  data() {
    return {};
  },
  components: {
    MyMovieItem
  }
};
</script>
<style lang="scss" scoped>
.movie-list {
  background: #fff;
  margin-top: 10px;
}
</style>
