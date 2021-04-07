import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: 'auth',
    path: '/auth',
    component: () => import('../app/Auth/main'),
  },
  {
    name: 'posts',
    path: '/',
    component: () => import('../app/Posts/main'),
  },
  {
    name: 'post-add',
    path: '/posts/add',
    component: () => import('../app/Posts/components/add'),
  },
  {
    name: 'post-edit',
    path: '/posts/edit',
    component: () => import('../app/Posts/components/edit'),
  },
  {
    name: 'admin',
    path: '/admin',
    component: () => import('../app/Admin/main'),
  },
  {
    name: 'admin-users',
    path: '/admin/users',
    component: () => import('../app/Admin/components/users/list'),
  },
  {
    name: 'admin-user-add',
    path: '/admin/users/add',
    component: () => import('../app/Admin/components/users/add'),
  },
  {
    name: 'admin-user-edit',
    path: '/admin/users/edit',
    component: () => import('../app/Admin/components/users/edit'),
  },
  {
    name: 'admin-posts',
    path: '/admin/posts',
    component: () => import('../app/Admin/components/posts/list'),
  },
  {
    name: 'admin-post-add',
    path: '/admin/posts/add',
    component: () => import('../app/Admin/components/posts/add'),
  },
  {
    name: 'admin-post-edit',
    path: '/admin/posts/edit',
    component: () => import('../app/Admin/components/posts/edit'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
