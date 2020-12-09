<template>
  <div class="cinema">这里是待映</div>
</template>

<script>
export default {
  props: ["a"],
  mounted() {
    console.log(333);
    // console.log(this.$route.query.a);
  }
};
</script>

<style lang="scss">
.cinema {
  height: 1500px;
}
</style>
