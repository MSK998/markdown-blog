<template>
  <div class="container">
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <div v-html="article.sanitisedHTML" class="blog-content"></div>
    <div id="buttons">
      <button id="button" v-if="article.isArchived" @click="unarchive">Unarchive</button>
      <router-link
        :to="{
          name: 'EditArticle',
          params: {
            slug: artSlug
          },
        }"
      >
        <button id="button">Edit</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from '@/router'

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

  methods: {
    unarchive(){
      this.$store.dispatch('articles/archiveArticle', this.article.id)
      router.replace('/')
    }
  }
};
</script>
<style scoped>
#buttons{
    text-align: center;
    margin: 0 auto;
}
#button{
    width: 30rem;
}
</style>