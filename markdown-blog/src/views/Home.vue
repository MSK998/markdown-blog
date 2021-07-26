<template>
  <div class="container">
    <teleport to=".router" v-if="loading">
      <loading-spinner />
    </teleport>

    <div v-if="!loading">
      <h1><strong>A Basic Blog page</strong></h1>
      <p>This is a basic blog to showcase a full stack application.</p>
      <div v-for="article in articles" :key="article.id">
        <article-card :article="article" />
      </div>

      <pages />

      <div id="buttons">
        <router-link to="/archives">
          <button id="button">Archives</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import Pages from "@/components/Pages.vue";

export default {
  name: "Home",
  data() {
    return {
      loading: false,
    };
  },
  components: { ArticleCard, LoadingSpinner, Pages },
  async created() {
    this.loading = true;
    this.$store.dispatch("articles/getArticles");
    this.loading = false;
  },
  computed: {
    articles() {
      return this.$store.getters["articles/allArticles"];
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
#buttons {
  text-align: center;
  margin: 0 auto;
}
#button {
  width: 30rem;
}
</style>
