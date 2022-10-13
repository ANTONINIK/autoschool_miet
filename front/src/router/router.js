import News from "../components/News.vue";
import Test from "../components/Test.vue";
import About from "../components/About.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Profile from "../components/Profile.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: News,
  },

  {
    path: "/test",
    component: Test,
  },

  {
    path: "/about",
    component: About,
  },

  {
    path: "/login",
    component: Login,
  },

  {
    path: "/register",
    component: Register,
  },

  {
    path: "/profile",
    component: Profile,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
