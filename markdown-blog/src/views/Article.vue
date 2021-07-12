<template>
  <div class="container">
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <div v-html="article.sanitisedHTML" class="blog-content"></div>
    <div id="edit">
      <router-link
        :to="{
          name: 'EditArticle',
          params: {
            slug: artSlug
          },
        }"
      >
        <button id="editButton">Edit</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Article",
  data() {
    return {
      article: {},
      artSlug: this.$route.params.slug
    };
  },
  async created() {
    const response = await axios.get(
      process.env.VUE_APP_API + "/articles/" + this.$route.params.slug
    );
    console.log(response.data);
    this.article = await response.data;
  },
};
</script>
<style scoped>
#edit{
    text-align: center;
    margin: 0 auto;
}
#editButton{
    width: 30rem;
}
</style>