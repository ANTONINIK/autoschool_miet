import Main from "@/pages/Main.vue";
import TestPage from "@/pages/TestPage.vue";
import About from "@/pages/About.vue";
import Authorization from "@/pages/Authorization.vue";
import Registration from "@/pages/Registration.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },

    {
        path: '/testpage',
        component: TestPage
    },

    {
        path: '/about',
        component: About
    },

    {
        path: '/authorization',
        component: Authorization
    },

    {
        path: '/registration',
        component: Registration
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;