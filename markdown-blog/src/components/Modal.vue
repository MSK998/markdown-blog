<template>
  <div class="modal">
    <div class="modal-content">
      <div id="modal-title">
        <h4>
          {{ title }}
        </h4>
      </div>
      <div id="modal-body">
        <p>
          {{ body }}
        </p>
      </div>
      <div id="modal-footer">
        <button @click="cancel">Cancel</button>
        <button :class="warning" @click="confirm">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "body", "warn"],
  emits: ["cancel", "confirm"],
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    confirm() {
      this.$emit("confirm");
    },
  },
  computed: {
    warning() {
      return this.warn === "true" ? "button-warn" : "button-primary";
    },
  },
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15rem auto;
  padding: 20px;
  border: 0.1rem solid #888;
  width: 40%;
  border-radius: 1rem;
}

#modal-footer {
  text-align: right;
}

#modal-title {
  text-align: center;
  text-transform: uppercase;
}
</style>

