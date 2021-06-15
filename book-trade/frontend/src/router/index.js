import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: 'booktrade',
    path: '/',
    component: () => import('../app/booktrade/Main'),
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../app/about/Main'),
  },
  {
    name: 'profile',
    path: '/profile',
    component: () => import('../app/profile/Main'),
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
