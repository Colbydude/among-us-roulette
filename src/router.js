import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import(/* webpackChunkName: "main" */ './views/Main.vue')
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: "main" */ './views/NotFound.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
