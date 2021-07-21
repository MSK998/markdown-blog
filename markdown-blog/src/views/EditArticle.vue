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
      <textarea
        name="markdown"
        id="markdown"
        @input="update"
        v-model="markdown"
      ></textarea>
      <button class="button-primary u-pull-right" @click="editArticle">
        Save
      </button>
    </div>
    <article-preview :html="html" />
  </div>
</template>

<script>
import lo from "lodash";
import marked from "marked";
import axios from "axios";
import ArticlePreview from '@/components/ArticlePreview.vue'

export default {
  name: "EditArticle",
  components: { ArticlePreview },
  data() {
    return {
      id: "",
      title: "",
      description: "",
      markdown: "",
      preview: "",
    };
  },

  async created() {
    axios
      .get(process.env.VUE_APP_API + "/articles/" + this.$route.params.slug)
      .then((res) => {
        console.log(res);
        this.id = res.data.id;
        this.title = res.data.title;
        this.description = res.data.description;
        this.markdown = res.data.markdown;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    update: lo.debounce(function (event) {
      this.markdown = event.target.value;
    }, 300),

    editArticle() {
      this.$store.dispatch("articles/editArticle", {
        id: this.id,
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