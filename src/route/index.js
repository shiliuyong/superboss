import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Hello = resolve => require(['../components/Hello.vue'], resolve);

const routes = [{
    path: '/hello',
    component: Hello,
    name: 'hello'
}, {
    path: '/',
    component: {
        template: '<div>this is init.</div>'
    },
    name: 'default'
}];

const router = new VueRouter({
    routes: routes,
    mode: 'hash',
    linkActiveClass: 'active'
});

export default router;
