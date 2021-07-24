import axios from "axios";

export default {
  async getArticle({ commit }, slug) {
    const response = await axios.get(
      process.env.VUE_APP_API + "/articles/" + slug
    );

    commit("setArticle", response.data)
  },

  async setMarkdown({commit}, markdown){
      commit("setMarkdown", markdown)
  }
};
