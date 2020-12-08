<template>
  <div>
    <section class="header">
      <my-header :hasBack="false" />
      <my-nav-tab />
    </section>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyHeader from "com/home/MyHeader";
import MyNavTab from "com/home/MyNavTab";

export default {
  components: {
    MyHeader,
    MyNavTab
  }
};
</script>
<style lang="scss" scoped>
section.header {
  width: 100%;
  height: 96px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.content {
  margin-top: 96px;
}
</style>
