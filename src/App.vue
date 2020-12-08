<template>
  <div id="app">
    <!-- 存在底部tab的页面 -->
    <!-- <Home /> -->
    <!-- 没有底部tab的页面 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from "./views/Home";

export default {
  // data() {
  //   return {
  //     msg: "hello world"
  //   };
  // },
  // components: {
  //   Home
  // }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #777;
  background: #f5f5f5;
}
</style>
