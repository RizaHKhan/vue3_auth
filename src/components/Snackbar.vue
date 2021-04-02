<template>
  <div class="snackbar">
    <h4>Title</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
      culpa.
    </p>
    <button>Close</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Snackbar",
});
</script>

<style lang="scss" scoped>
.snackbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 1rem;

  h4,
  p {
    text-align: left;
  }

  button {
    width: 150px;
  }
}
</style>
