import Home from "@/views/Home.vue"
import Saved from "@/views/Saved.vue"
import Search from "@/views/Search.vue"
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
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

