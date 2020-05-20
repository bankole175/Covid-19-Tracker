import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'all.state',
    component: () => import('../views/StateBreakdown.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
