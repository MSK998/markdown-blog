<template>
  <div class="container">
    <h1>New Article</h1>
    <editor editing="false" />
    <label for="preview">Preview</label>

    <article-preview :html="html" />
  </div>
</template>
<script>
import marked from "marked";
import ArticlePreview from "@/components/ArticlePreview.vue";
import Editor from "../components/Editor.vue";

export default {
  name: "NewArticle",
  components: { ArticlePreview, Editor },
  computed: {
    html() {
      return marked(this.$store.getters["editor/getMarkdown"]);
    },
  },
};
</script>