import vue from "vue";
import vuex from "vuex";

import moduleCity from "./moduleCity";
import moduleHot from "./moduleHot";

vue.use(vuex);

export default new vuex.Store({
  modules: {
    moduleCity,
    moduleHot
  }
});

// export default new vuex.Store({
//   state: {
//     // 先看本地存储里面有没有城市信息，有就用，没有重新设置
//     city: localStorage.getItem("city")
//       ? JSON.parse(localStorage.getItem("city"))
//       : { name: "杭州", cityId: 300100 },
//     // 最受欢迎的列表
//     ratedList: [],
//     // 热门的电影列表
//     movieList: [],
//     count: 0,
//     ids: []
//   },
//   mutations: {
//     changeCity(state, payload) {
//       // 存到浏览器
//       localStorage.setItem("city", JSON.stringify(payload));
//       state.city = payload;
//     },
//     ratedMutation(state, payload) {
//       state.ratedList = payload;
//     },
//     movieListMutation(state, payload) {
//       state.movieList = payload.result;
//       state.count = payload.count;
//       state.ids = payload.ids;
//     },
//     concatMovieList(state, payload) {
//       state.movieList = [...state.movieList, ...payload];
//     }
//   },
//   actions: {
//     async getRatedList({ commit }) {
//       const res = await getRatedListApi();
//       commit("ratedMutation", res.result);
//     },
//     // async getMovieList({ commit }) {
//     //   const res = await getMovieListApi();
//     //   commit("movieListMutation", res);
//     // }
//     getMovieList({ commit }) {
//       return new Promise(resolve => {
//         getMovieListApi().then(res => {
//           commit("movieListMutation", res);
//           resolve();
//         });
//       });
//     }
//   }
// });
