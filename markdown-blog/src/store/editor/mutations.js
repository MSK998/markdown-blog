export const mutations = {
    setArticle(state, article){
        state.id = article.id
        state.title = article.title
        state.description = article.description
        state.markdown = article.markdown
        state.slug = article.slug
        state.sanitisedHTML = article.sanitisedHTML
        state.isArchived = article.isArchived
    },

    setMarkdown(state, markdown){
        state.markdown = markdown
    }
}