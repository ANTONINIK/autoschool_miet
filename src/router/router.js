import MainPage from "@/pages/MainPage.vue";
import TestPage from "@/pages/TestPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import AuthorizationPage from "@/pages/AuthorizationPage.vue";
import RegistrationPage from "@/pages/RegistrationPage.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: MainPage
    },

    {
        path: '/testpage',
        component: TestPage
    },

    {
        path: '/about',
        component: AboutPage
    },

    {
        path: '/authorization',
        component: AuthorizationPage
    },

    {
        path: '/registration',
        component: RegistrationPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;