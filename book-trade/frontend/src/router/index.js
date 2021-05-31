import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: 'auth',
    path: '/auth',
    component: () => import('../app/auth/main'),
  },
  {
    name: 'booktrade',
    path: '/',
    component: () => import('../app/booktrade/main'),
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../app/about/main'),
  },
  {
    name: 'profile',
    path: '/profile',
    component: () => import('../app/profile/main'),
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
