<template>
  <div class="container">
    <h1><strong>A Basic Blog page</strong></h1>
    <p>This is a basic blog to showcase a full stack application.</p>
    <div v-for="article in articles" :key="article.id">
      <article-card :article="article" />
    </div>
    <div id="buttons">
      <router-link to="/archives">
        <button id="button">Archives</button>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import ArticleCard from "@/components/ArticleCard.vue";
export default {
  name: "Home",
  components: { ArticleCard },
  async created() {
    this.$store.dispatch("articles/getArticles");
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
#buttons{
    text-align: center;
    margin: 0 auto;
}
#button{
    width: 30rem;
}
</style>
