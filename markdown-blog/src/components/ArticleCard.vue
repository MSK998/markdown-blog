<template>
  <article class="card">
    <router-link
      :to="{
        name: 'Article',
        params: {
          slug: article.slug,
        },
      }"
    >
      <div class="content">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </router-link>
    <div class="linkbox">
      <button-modal
        title="Delete"
        buttonStyle="warn"
        modalTitle="Delete Article"
        modalBody="Are you sure you want to delete this article?"
        modalWarn="true"
        @confirm="deleteArticle"
      />
      <button-modal
        title="Archive"
        buttonStyle="none"
        modalTitle="Archive Article"
        modalBody="Are you sure you want to archive this article?"
        modalWarn="false"
        @confirm="archiveArticle"
        v-if="!article.isArchived"
      />
    </div>
  </article>
</template>
<script>
import ButtonModal from "./ButtonModal.vue";
export default {
  components: { ButtonModal },
  props: ["article"],
  methods: {
    archiveArticle() {
      this.$store.dispatch("articles/archiveArticle", this.article.id);
    },
    deleteArticle() {
      this.$store.dispatch("articles/deleteArticle", this.article.id);
    },
  },
};
</script>
<style scoped>
.card {
  border: 0.1rem solid #ddd;
  border-radius: 0.7rem;
  margin-top: 0.5rem;
  min-height: 22rem;
  overflow: hidden;
  position: relative;
}
.link {
  height: 2rem;
  bottom: 0.5rem;
  right: 0.5rem;
  position: absolute;
}
button {
  float: right;
}
.content {
  margin: 0.5rem;
}
.linkbox {
  width: 100%;
  text-align: right;
}

a,
a:hover {
  text-decoration: none;
  color: inherit;
}
</style>

