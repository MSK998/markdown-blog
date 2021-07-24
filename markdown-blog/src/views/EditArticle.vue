<template>
  <div class="container">
    <teleport to=".router" v-if="loading">
      <loading-spinner />
    </teleport>

    <div v-if="!loading">
      <editor editing="true" />
    </div>
    <article-preview :html="html" />
  </div>
</template>

<script>
import marked from "marked";
import ArticlePreview from "@/components/ArticlePreview.vue";
import Editor from "@/components/Editor.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  name: "EditArticle",
  components: { ArticlePreview, LoadingSpinner, Editor },
  data() {
    return {
      loading: false,
    };
  },

  async created() {
    this.loading = false;
    await this.$store.dispatch("editor/getArticle", this.$route.params.slug);
    this.loading = false;
  },
  computed: {
    html() {
      return marked(this.$store.getters["editor/getMarkdown"]);
    }
  },
};
</script>