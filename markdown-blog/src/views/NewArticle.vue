<template>
  <div class="container">
    <editor editing="false" />
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
    }
  },
};
</script>