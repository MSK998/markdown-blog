<template>
  <div class="container">
    <teleport to=".router" v-if="loading">
      <loading-spinner />
    </teleport>
    <div v-if="!loading">
      <h1><strong>Archived Pages</strong></h1>
      <p>
        Archived pages that may either be outdated information, or posts that
        should be kept but not in the main blog
      </p>
      <div v-for="article in archives" :key="article.id">
        <article-card :article="article" />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";
import LoadingSpinner from "@/components/LoadingSpinner";

export default {
  name: "Home",
  components: { ArticleCard, LoadingSpinner },
  data() {
    return {
      loading: false,
    };
  },
  async created() {
    this.loading = await true;
    await this.$store.dispatch("archives/getArchives");
    this.loading = await false;
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
