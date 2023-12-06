import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../view/Home.vue'
import News from '../view/News.vue'
import EditNews from '../view/EditNews.vue'
import NotFound from '../view/NotFound.vue'


const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/editnews',
        component: EditNews
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
    {
        path: '/',
        redirect: '/home'
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router