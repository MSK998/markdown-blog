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

    singleArticleBySlug: (state) => (slug) => {
      return state.articles.find((article) => article.slug === slug);
    },
  },

  mutations,
  actions,
};
