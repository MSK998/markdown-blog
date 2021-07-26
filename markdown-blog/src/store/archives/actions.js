import axios from "axios";

export default {
  async getArchives({ commit }, page) {
    page = page ? page : 1;
    const response = await axios.get(process.env.VUE_APP_API + "/archive", {
      params: {
        page: page,
      },
    });

    commit("setPage", page)
    commit("setTotalPages", response.data.pages)
    commit("getArchives", response.data.archives);
  },
  async unarchiveArticle({ commit }, id) {
    const response = await axios.post(
      process.env.VUE_APP_API + "/archive?id=" + id
    );
    if (response.status === 201) {
      commit("removeArchive", id);
    }
  },
};
