import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_ENV_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_ENV_FIREBASE_AUTHDOMAIN,
  projectId: process.env.VUE_APP_ENV_FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_ENV_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_ENV_FIREBASE_APPID,
};

firebase.initializeApp(firebaseConfig);

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).use(store).use(router).mount("#app");
