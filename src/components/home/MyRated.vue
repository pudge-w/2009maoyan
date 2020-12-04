<template>
  <div class="rated">
    <h5>最受欢迎电影</h5>
    <ul>
      <li v-for="item in ratedList" :key="item._id">
        <img :src="item.imgUrl" alt="" />
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    ratedList: Array
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.rated {
  background: #fff;
  height: 200px;
  padding: 0 15px;

  h5 {
    height: 32px;
    line-height: 32px;
    font-size: 15px;
    font-weight: 500;
  }

  ul {
    height: 168px;
    display: flex;
    overflow: auto;

    li {
      width: 85px;
      height: 140px;
      margin-right: 10px;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 115px;
      }

      p {
        margin: 0;
        font-size: 15px;
        color: #222;
        margin-bottom: 3px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
