export default {
  changeCity(state, payload) {
    // 存到浏览器
    localStorage.setItem("city", JSON.stringify(payload));
    state.city = payload;
  }
};
