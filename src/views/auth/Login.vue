<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" v-model="email" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password" />
          </div>
          <button @click.prevent="login" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import firebase from "firebase";

export default defineComponent({
  setup() {
    const email = ref<string>("");
    const password = ref<string>("");

    async function login() {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        console.log(user);
      } catch (e) {
        console.log(e);
      }
    }

    return { email, password, login };
  },
});
</script>
