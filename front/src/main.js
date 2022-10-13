import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router/router.js";
import "@/axios";
import store from "./vuex";

const app = createApp(App);

app.use(router).use(store).mount("#app");
