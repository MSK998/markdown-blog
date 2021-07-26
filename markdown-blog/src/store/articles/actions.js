import axios from "axios";
import router from "@/router";

export default {
  async getArticles({ commit }, page) {
    page = page ? page : 1
    const response = await axios.get(process.env.VUE_APP_API + "/articles", {
      params: {
        page: page,
      },
    });

    console.log(response.data);
    commit("setPage", page)
    commit("setTotalPages", response.data.rows)
    commit("getArticles", response.data.articles);
  },

  async nextPage({ commit, state }) {
    const response = await axios.get(process.env.VUE_APP_API + "/articles", {
      page: parseInt(state.currentPage) + 1,
    });
    commit("nextPage", response.data);
  },

  async getArticle({ commit }, slug) {
    const response = await axios.get(
      process.env.VUE_APP_API + "/articles/" + slug
    );
    if (response) {
      commit("getArticle", response.data);
    }
  },

  async addArticle({ commit }, article) {
    const response = await axios.post(process.env.VUE_APP_API + "/new", {
      title: article.title,
      description: article.description,
      markdown: article.markdown,
    });
    if (response.status) {
      commit("addArticle", response.data);
      router.replace("/");
    }
  },

  async editArticle({ commit }, article) {
    console.log(article);
    const response = await axios.put(
      process.env.VUE_APP_API + "/articles/" + article.id,
      {
        title: article.title,
        description: article.description,
        markdown: article.markdown,
      }
    );
    if (response.status === 201) {
      commit("editArticle", article);
      router.replace("/");
    }
  },

  async deleteArticle({ commit }, id) {
    const response = await axios.delete(
      process.env.VUE_APP_API + "/articles/" + id
    );
    if (response.status === 200) {
      commit("removeArticle", id);
    }
  },

  async archiveArticle({ commit }, id) {
    const response = await axios.post(
      process.env.VUE_APP_API + "/archive?id=" + id
    );
    if (response.status === 201) {
      commit("removeArticle", id);
    }
  },
};
