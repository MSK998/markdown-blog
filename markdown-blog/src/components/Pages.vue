<template>
  <div class="pages">
    <div>
      <span>{{ currentPage }} of {{ totalPages }} page(s)</span>
    </div>

    <span>
      <button @click="previousPage" v-if="currentPage > 1">PREV</button>
      <button @click="nextPage" v-if="currentPage < totalPages">NEXT</button>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    currentPage() {
      return this.$store.getters["articles/currentPage"];
    },

    totalPages() {
      return this.$store.getters["articles/totalPages"];
    },
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    previousPage() {
      this.scrollToTop();
      return this.$store.dispatch("articles/getArticles", this.currentPage - 1);
    },
    nextPage() {
      this.scrollToTop();
      return this.$store.dispatch("articles/getArticles", this.currentPage + 1);
    },
  },
};
</script>

<style scoped>
.pages {
  text-align: center;
}
</style>