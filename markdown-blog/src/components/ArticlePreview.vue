<template>
  <div>
    <div v-html="html" id="preview"></div>
  </div>
</template>
<script>
export default {
  props: ["html"],
};
</script>

<style>
#preview {
  text-align: justify;
}
#preview img {
  display: block;
  width: 80%;
  max-height: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>