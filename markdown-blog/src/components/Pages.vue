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

  props: ["archives"],

  computed: {
    currentPage() {
      if (this.archives === "true") {
        return this.$store.getters["archives/currentPage"];
      } else {
        return this.$store.getters["articles/currentPage"];
      }
    },

    totalPages() {
      if (this.archives === "true") {
        return this.$store.getters["archives/totalPages"];
      } else {
        return this.$store.getters["articles/totalPages"];
      }
    },
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    previousPage() {
      this.scrollToTop();
      if (this.archives === "true") {
        return this.$store.dispatch(
          "archives/getArchives",
          this.currentPage - 1
        );
      } else {
        return this.$store.dispatch(
          "articles/getArticles",
          this.currentPage - 1
        );
      }
    },
    nextPage() {
      this.scrollToTop();
      if (this.archives === "true") {
        return this.$store.dispatch(
          "archives/getArchives",
          this.currentPage + 1
        );
      } else {
        return this.$store.dispatch(
          "articles/getArticles",
          this.currentPage + 1
        );
      }
    },
  },
};
</script>

<style scoped>
.pages {
  text-align: center;
}
</style>