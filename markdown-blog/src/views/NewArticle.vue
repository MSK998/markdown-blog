<template>
  <div class="container">
    <div>
      <label for="title">Title - {{ titleChar }} characters</label>
      <input type="text" id="title" maxlength="60" v-model="title" />

      <label for="description"
        >Description - {{ descriptionChar }} characters</label
      >
      <input
        type="text"
        id="description"
        maxlength="200"
        v-model="description"
      />

      <label for="markdown"
        >Body -
        <a href="https://devhints.io/markdown">Markdown Supported</a></label
      >
      <textarea name="markdown" id="markdown" @input="update"></textarea>
      <button class="button-primary u-pull-right" @click="createArticle">
        Create
      </button>
    </div>
    <div>
      <label for="preview">Preview</label>
      <div v-html="html" id="preview"></div>
    </div>
  </div>
</template>
<script>
import lo from "lodash";
import marked from "marked";

export default {
  name: "NewArticle",
  props: [],
  data() {
    return {
      title: "",
      description: "",
      markdown: "",
      preview: "",
    };
  },
  methods: {
    update: lo.debounce(function (event) {
      this.markdown = event.target.value;
    }, 300),
    
    createArticle() {
      this.$store.dispatch("articles/addArticle", {
        title: this.title,
        description: this.description,
        markdown: this.markdown,
      });
    },
  },
  computed: {
    html() {
      return marked(this.markdown);
    },
    titleChar() {
      return 60 - this.title.length;
    },
    descriptionChar() {
      return 200 - this.description.length;
    },
  },
};
</script>

<style scoped>
#description {
  width: 100%;
}
#title {
  width: 100%;
}
#markdown {
  width: 100%;
  height: 60rem;
  resize: none;
}
</style>