import News from "../components/News.vue";
import Test from "../components/Test.vue";
import About from "../components/About.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Profile from "../components/Profile.vue";
import Result from "../components/Result.vue";
import TestsByTopic from "../components/TestsByTopic.vue";
import Error from "../components/Error.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: News,
  },

  {
    path: "/test/:topic?",
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

  {
    path: "/result",
    component: Result,
  },

  {
    path: "/testsbytopic",
    component: TestsByTopic,
  },

  {
    path: "/error",
    component: Error,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
