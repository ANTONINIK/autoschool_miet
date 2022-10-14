import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router/router.js";
import "@/axios";
import store from "./vuex";
import { BootstrapVue } from 'bootstrap-vue'

const app = createApp(App);

app.use(router).use(store).use(BootstrapVue).mount("#app");
