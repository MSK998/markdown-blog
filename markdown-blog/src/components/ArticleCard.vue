<template>
  <div class="card">
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
      <button class="button-warn" @click="deleteArticle">Delete</button>
      <button @click="archiveArticle">Archive</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["article"],
  methods: {
    archiveArticle() {
      this.$store.dispatch("articles/archiveArticle", this.article.id);
    },
    deleteArticle(){
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
}

a, a:hover {
  text-decoration: none;
  color: inherit;
  
}
</style>

