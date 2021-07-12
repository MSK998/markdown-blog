<template>
  <div class="container">
    <h1><strong>Archived Pages</strong></h1>
    <p>
      Archived pages that may either be outdated information, or posts that
      should be kept but not in the main blog
    </p>
    <div v-for="article in archives" :key="article.id">
      <article-card :article="article" />
    </div>
  </div>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";
export default {
  name: "Home",
  components: { ArticleCard },
  async created() {
    this.$store.dispatch("archives/getArchives");
  },
  computed: {
    archives() {
      return this.$store.getters["archives/allArchives"];
    },
  },
};
</script>

<style scoped>
@import "../assets/css/normalize.css";
@import "../assets/css/skeleton.css";

a {
  text-decoration: none;
  color: inherit;
}
</style>
