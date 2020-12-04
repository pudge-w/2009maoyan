<template>
  <div class="movie-list">
    列表
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.getMovieList();
  },
  methods: {
    getMovieList() {
      fetch(
        "/ajax/movieOnInfoList?token=I1whZBVrdXtFlg9_ftuBJyU28cAAAAAAkgsAAHjLzB4ixXWMH7LABkZZSwbfrQ3z3w0NZVga4z-Gr1_Igi4iHLDc9yfeAmYRnmVtLQ&optimus_uuid=04AEF8C0FDC211EA8D41C10A00DEC7C6AC62B66AD692433884B754C1198E88EA&optimus_risk_level=71&optimus_code=10"
      )
        .then(response => response.json())
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.movie-list {
  background: #fff;
  margin-top: 10px;
}
</style>
