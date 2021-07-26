import actions from "./actions";
import { mutations } from "./mutations";

export default {
  namespaced: true,
  state: {
    articles: [],
    currentPage: 1,
    totalPages: 1,
  },

  getters: {
    allArticles(state) {
      return state.articles;
    },

    singleArticleBySlug: (state) => (slug) => {
      return state.articles.find((article) => article.slug === slug);
    },

    currentPage: (state) => {
      return state.currentPage;
    },

    totalPages: (state) => {
      return state.totalPages;
    },
  },

  mutations,
  actions,
};
