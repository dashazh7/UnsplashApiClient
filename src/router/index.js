import Home from "@/views/Home.vue"
import Saved from "@/views/Saved.vue"
import Search from "@/views/Search.vue"
import Information from "@/views/Information.vue"
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },

    {
        path: '/saved',
        name: 'saved',
        component: Saved
    },

    {
        path: '/search',
        name: 'search',
        component: Search
    },

    {
        path: '/info',
        name: 'info',
        component: Information
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

