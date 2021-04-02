import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_PROJECTID,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGENUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
};

firebase.initializeApp(firebaseConfig);

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).use(store).use(router).mount("#app");
