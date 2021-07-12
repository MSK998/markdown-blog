import actions from "./actions";
import { mutations } from "./mutations";

export default {
  namespaced: true,
  state: {
    archives: [],
  },
  getters: {
    allArchives(state) {
      return state.archives;
    },
  },

  mutations,
  actions,
};
