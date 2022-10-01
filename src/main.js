import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router/router.js';
import Math from 'core-js/fn/math';

const app = createApp(App)


app
   .use(router) 
   .mount('#app');
