export const mutations = {
  getArticles(state, articles) {
    state.articles = articles;
  },
  addArticle(state, article) {
    state.articles.push(article);
    state.articles = [...state.articles];
  },

  removeArticle(state, article) {
    state.articles.splice(
      state.articles.findIndex((x) => x.id === article),
      1
    );

    state.articles = [...state.articles];
  },

  editArticle(state, article) {
    const idx = state.articles.findIndex((x) => x.id === article.id);

    if (idx !== -1) {
      state.articles[idx] = article;
    } else {
      state.articles.push(article);
    }

    state.articles = [...state.articles];
  },
};
