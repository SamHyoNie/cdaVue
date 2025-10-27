import { createRouter, createWebHashHistory } from "vue-router";
//import Home from '../views/Home.vue';
//import Contact from '../views/Contact.vue';

const router = createRouter({
    history: createWebHashHistory(),
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
        }
    ]
});

export default router;