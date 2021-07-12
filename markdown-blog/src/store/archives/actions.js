import axios from "axios";

export default {
  async getArchives({ commit }) {
    const response = await axios.get(process.env.VUE_APP_API + "/archive");
    commit("getArchives", response.data);
  },
  async unarchiveArticle({ commit }, id) {
    const response = await axios.post(
      process.env.VUE_APP_API + "/archive?id=" + id
    );
    if (response.status === 201) {
        commit('removeArchive', id)
    }
  },
};
