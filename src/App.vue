<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="navbar-brand" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="navbar-brand" to="/contact"
                >Contact</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="navbar-brand" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="navbar-brand" to="/user/123"
                >User</router-link
              >
            </li>
            <li class="nav-item">
              <button @click.prevent="logout">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <Snackbar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import firebase from "firebase";
import Snackbar from "@/components/Snackbar.vue";

export default defineComponent({
  name: "App",
  components: { Snackbar },
  setup() {
    const router = useRouter();

    function logout() {
      firebase
        .auth()
        .signOut()
        .then(() => router.push("/auth/login"));
    }

    return { logout };
  },
});
</script>

<style lang="scss">
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
