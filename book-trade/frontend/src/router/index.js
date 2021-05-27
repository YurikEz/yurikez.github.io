import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: 'bookTrade',
    path: '/',
    component: () => import('../app/main'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
