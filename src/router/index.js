import { createRouter, createWebHistory } from "vue-router";
//import Home from '../views/Home.vue';
//import Contact from '../views/Contact.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            //là, on définit la route par défaut
            path: '/',
            alias: '/home',
            name: 'home',
            //component: Home => Faire l'import plus haut
            component: () => import('../views/Home.vue') //importation dynamique => lazy loading
        },
        {
            path: '/contact',
            name: 'contact',
            //component: Contact
            component: () => import('../views/Contact.vue')
        },
        //{
        //    path: '/about',
        //    name: 'about',
        //    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') //nommer le chunk
        //    component: () => import('../views/About.vue')
        //},
        //{
        //    path: '/:catchAll(.*)', //route pour gérer les 404
        //    name: 'NotFound',
        //    component: () => import('../views/NotFound.vue')
        //}, 
        {
            path: '/text-interpolation',
            name: 'TextInterpolation',
            component: () => import('../views/lesson/TextInterpolation.vue')
        },
        {
            path: '/exo-text-interpolation',
            name: 'ExoTextInterpolation',
            component: () => import('../views/exercices/exo-text-interpolation.vue')
        }
    ]
});

export default router;