import { createRouter, createWebHistory } from "vue-router";

import MyHome from './pages/MyHome.vue';
import ProjectList from './pages/ProjectList.vue';
import ProjectCard from './pages/ProjectCard.vue';
import MyContact from './pages/MyContact.vue';
import ErrorPage from './pages/ErrorPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component : MyHome
        },
        {
            path:'/contact',
            name:'contact',
            component : MyContact
        },
        {
            path:'/project',
            name:'ProjectList',
            component : ProjectList
        },
        {
            path:'/project/:slug',
            name:'ProjectCard',
            component : ProjectCard
        },
        {
            path:'/:pathMatch(.*)*',
            name: 'ErrorPage',
            component : ErrorPage
        }
    ]
});

export { router };