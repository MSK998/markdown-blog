<template>
    <div>
      <label for="preview">Preview</label>
      <div v-html="html" id="preview"></div>
    </div>
</template>
<script>
export default {
    props: ['html']
}
</script>