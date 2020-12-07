<template>
  <footer>
    <ul>
      <li
        v-for="(item, index) in footerList"
        :key="item.icon"
        :class="{ active: activeIndex === index }"
        @click="handleClick(index)"
      >
        <span class="iconfont" :class="item.icon"></span>
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerList: [
        {
          title: "电影/影院",
          icon: "icon-dianying"
        },
        {
          title: "视频",
          icon: "icon-shipin"
        },
        {
          title: "小视频",
          icon: "icon-11"
        },
        {
          title: "演出",
          icon: "icon-yanchu"
        },
        {
          title: "我的",
          icon: "icon-wode"
        }
      ],
      activeIndex: 0
    };
  },
  methods: {
    handleClick(i) {
      this.activeIndex = i;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/var.scss";
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px;
  border-top: 1px solid $border-color;
  background: #fff;

  ul {
    display: flex;
    width: 100%;
    height: 100%;

    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .iconfont {
        font-size: 20px;
      }

      p {
        font-size: 12px;
        margin-top: 5px;
      }
    }

    .active {
      color: $theme-color;
    }
  }
}
</style>
