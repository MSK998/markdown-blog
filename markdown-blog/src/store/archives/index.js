import actions from "./actions";
import { mutations } from "./mutations";

export default {
  namespaced: true,
  state: {
    archives: [],
    currentPage: 1,
    totalPages: 1,
  },
  getters: {
    allArchives(state) {
      return state.archives;
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
