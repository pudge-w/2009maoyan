import { getRatedListApi, getMovieListApi } from "../../utils/api";

export default {
  async getRatedList(context) {
    console.log(context);
    const res = await getRatedListApi();
    context.commit("ratedMutation", res.result);
  },
  // async getMovieList({ commit }) {
  //   const res = await getMovieListApi();
  //   commit("movieListMutation", res);
  // }
  getMovieList({ commit }) {
    return new Promise(resolve => {
      getMovieListApi().then(res => {
        commit("movieListMutation", res);
        resolve();
      });
    });
  }
};
