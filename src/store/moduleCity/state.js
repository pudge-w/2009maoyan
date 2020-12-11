export default {
  // 先看本地存储里面有没有城市信息，有就用，没有重新设置
  city: localStorage.getItem("city")
    ? JSON.parse(localStorage.getItem("city"))
    : { name: "杭州", cityId: 300100 }
};
