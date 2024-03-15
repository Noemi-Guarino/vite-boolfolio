import { createRouter, createWebHistory } from 'vue-router';

import IndexPage from './components/pages/IndexPage.vue';
import ProjectCard from './components/pages/ProjectCard.vue';
import SingleCard from './components/pages/SingleCard.vue';
import ContactPage from './components/pages/ContactPage.vue';
import NotFoundPage from './components/pages/NotFoundPage.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
        {
            path: '/',
            name: 'home',
            component: IndexPage
        },
        {
            path: '/blog',
            name: 'posts.index',
            component: ProjectCard
        },
        {
            path: '/blog/:slug',
            name: 'posts.show',
            component: SingleCard
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFoundPage
            },
    ]
});
export { router };
