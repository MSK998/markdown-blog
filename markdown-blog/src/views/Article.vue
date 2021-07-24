<template>
  <div class="container">

    <teleport to=".router" v-if="loading">
      <loading-spinner />
    </teleport>

    <div v-if="!loading">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>

      <div v-html="article.sanitisedHTML" class="blog-content" />

      <div id="buttons">

        <button id="button" v-if="article.isArchived" @click="unarchive">
          Unarchive
        </button>

        <router-link
          :to="{
            name: 'EditArticle',
            params: {
              slug: article.slug,
            },
          }"
        >
          <button id="button">Edit</button>
        </router-link>

      </div>
    </div>

  </div>
</template>

<script>
import router from "@/router";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  name: "Article",
  components: {
    LoadingSpinner,
  },

  data() {
    return {
      loading: false,
    };
  },
  
  async created() {
    this.loading = true;
    await this.$store.dispatch("editor/getArticle", this.$route.params.slug);
    this.loading = false;
  },

  computed: {
    article() {
      return this.$store.getters["editor/getArticle"];
    },
  },

  methods: {
    unarchive() {
      this.$store.dispatch("articles/archiveArticle", this.article.id);
      router.replace("/");
    },
  },
};
</script>
<style scoped>
#buttons {
  text-align: center;
  margin: 0 auto;
}
#button {
  width: 30rem;
}
</style>