import actions from "./actions";
import { mutations } from "./mutations";

export default {
  namespaced: true,
  state: {
    articles: [],
  },
  getters: {
    allArticles(state) {
      return state.articles;
    },
  },

  mutations,
  actions,
};
