export default {
  ratedMutation(state, payload) {
    state.ratedList = payload;
  },
  movieListMutation(state, payload) {
    state.movieList = payload.result;
    state.count = payload.count;
    state.ids = payload.ids;
  },
  concatMovieList(state, payload) {
    state.movieList = [...state.movieList, ...payload];
  }
};
