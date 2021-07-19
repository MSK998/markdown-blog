<template>
  <span>
    <teleport to=".router" v-if="isOpen">
      <modal
        :title="modalTitle"
        :body="modalBody"
        :warn="modalWarn"
        @cancel="modalOpen"
        @confirm="confirm"
      />
    </teleport>
    <button :class="styleButton" @click="modalOpen">
      {{ title }}
    </button>
  </span>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  props: ["title", "buttonStyle", "modalTitle", "modalBody", "modalWarn"],
  components: { Modal },
  emits: ["confirm"],
  created() {},
  data() {
    return {
      isOpen: false,
    };
  },

  computed: {
    styleButton() {
      if (this.buttonStyle === "primary") {
        return "button-primary";
      } else if (this.buttonStyle === "warn") {
        return "button-warn";
      } else {
        return "none";
      }
    },
  },

  methods: {
    modalOpen() {
      this.isOpen = !this.isOpen;
    },
    confirm() {
      this.isOpen = false;
      this.$emit("confirm");
    },
  },
};
</script>

<style scoped>
</style>