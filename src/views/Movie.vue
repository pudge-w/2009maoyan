<template>
  <div>
    <section class="header">
      <my-header :hasBack="false" />
      <my-nav-tab />
    </section>
    <div class="content">
      <!-- <transition name="movieTransition" mode="in-out"> -->
      <!-- <keep-alive>
          <router-view v-if="$route.meta.requieAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.requieAlive"></router-view> -->
      <router-view></router-view>
      <!-- </transition> -->
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
  /* position: relative;
  height: 500px; */
  /* position: absolute;
  top: 96px;
  left: 0;
  right: 0;
  bottom: 48px; */
}

.movieTransition-enter-active,
.movieTransition-leave-active {
  transition: all 1s;
}
.movieTransition-enter/* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
}
</style>
