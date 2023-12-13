import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@renderer/layout/index.vue'
import main from '@renderer/views/main/index.vue'
import video from '@renderer/views/video/index.vue'
const routes = [
    {
        path: '/',
        // name: '/',
        redirect: '/main',
        component: Layout,
        children: [
            {
                path: '/main',
                name: 'Main',
                component: main
            },
            {
                path: '/video',
                name: 'Video',
                component: video
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
