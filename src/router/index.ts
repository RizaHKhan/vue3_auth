import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import firebase from "firebase";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/user/:id",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/user/User.vue"),
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/UserHome.vue"),
      },
      {
        path: "profile",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/Profile.vue"),
      },
      {
        path: "posts",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/Posts.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/auth/Auth.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "auth" */ "../views/auth/Login.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () =>
          import(/* webpackChunkName: "auth" */ "../views/auth/Register.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user && to.name !== "Login") {
      next({ name: "Login" });
    } else {
      next();
    }
  });
});

export default router;
