import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'auth',
            component: Home,
            meta: {
                title: 'Таблица amoCRM'
            }
        }
    ]
})

router.beforeEach((to, from) => {
    document.title = <string>to.meta?.title ?? 'amoCRM'
})

export default router
