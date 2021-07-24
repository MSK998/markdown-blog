import actions from "./actions";
import { mutations } from "./mutations";

export default {
  namespaced: true,
  state: {
    id: 0,
    title: "",
    description: "",
    markdown: "",
    slug: "",
    sanitisedHTML: "",
    isArchived: ""
  },

  getters: {
    getArticle(state) {
      return {
        id: state.id,
        title: state.title,
        description: state.description,
        markdown: state.markdown,
        slug: state.slug,
        sanitisedHTML: state.sanitisedHTML
      };
    },
    
    getId(state) {
      return state.id;
    },

    getTitle(state) {
      return state.title;
    },

    getDescription(state) {
      return state.description;
    },

    getMarkdown(state) {
      return state.markdown;
    },
  },
  actions,
  mutations,
};
