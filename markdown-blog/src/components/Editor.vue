<template>
  <div>
    <label for="title">Title - {{ titleChar }} characters</label>
    <input type="text" id="title" maxlength="60" v-model="article.title" />

    <label for="description"
      >Description - {{ descriptionChar }} characters</label
    >
    <input
      type="text"
      id="description"
      maxlength="200"
      v-model="article.description"
    />

    <label for="markdown"
      >Body -
      <a href="https://devhints.io/markdown">Markdown Supported</a></label
    >
    <textarea
      name="markdown"
      id="markdown"
      @input="update"
      v-model="article.markdown"
    ></textarea>
    <span>
      <file-upload @up="updateText" />

      <button class="button-primary u-pull-right" @click="saveArticle">
        Save
      </button>
    </span>
  </div>
</template>
<script>
import lo from "lodash";
import marked from "marked";
import FileUpload from "@/components/FileUpload.vue";
// import axios from "axios";

export default {
  components: { FileUpload },
  props: ["editing"],
  data() {
    return {
      article: {
        title: "",
        description: "",
        markdown: "",
      },
    };
  },

  async created() {
    if (this.editing === "true") {
      await this.$store.dispatch(
        "articles/getArticle",
        this.$route.params.slug
      );
      const response = await this.$store.getters[
        "articles/singleArticleBySlug"
      ](this.$route.params.slug);

      this.article = await response;

      this.$store.dispatch("editor/setMarkdown", this.article.markdown);
    } else {
      this.$store.dispatch("editor/setMarkdown", "");
    }
  },

  methods: {
    update: lo.debounce(function (event) {
      this.article.markdown = event.target.value;
      this.$store.dispatch("editor/setMarkdown", this.article.markdown);
    }, 300),

    updateText() {
      this.article.markdown = this.$store.getters["editor/getMarkdown"];
    },

    saveArticle() {
      if (this.editing === "true") {
        this.$store.dispatch("articles/editArticle", {
          id: this.article.id,
          title: this.article.title,
          description: this.article.description,
          markdown: this.article.markdown,
        });
      } else if (this.editing === "false") {
        this.$store.dispatch("articles/addArticle", {
          title: this.article.title,
          description: this.article.description,
          markdown: this.article.markdown,
        });
      }
    },
  },
  computed: {
    html() {
      return marked(this.$store.getters["editor/getMarkdown"]);
    },
    titleChar() {
      return 60 - this.article.title.length;
    },
    descriptionChar() {
      if (this.article.description) {
        return 200 - this.article.description.length;
      }
      return 200;
    },
  },
};
</script>

<style scoped>
#description {
  width: 100%;
}
#title {
  width: 100%;
}
#markdown {
  width: 100%;
  height: 60rem;
  resize: none;
}
</style>