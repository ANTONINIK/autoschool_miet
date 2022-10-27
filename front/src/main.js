import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import "@/axios";
import store from "./vuex";
import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App);

app.use(router).use(store).use(BootstrapVue3).mount("#app");
