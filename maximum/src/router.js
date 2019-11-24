import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('./components/Main.vue')
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('./components/Schedule.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./components/Detail.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./components/Test.vue')
    },
    {
      path: '/static',
      name: 'static',
      component: () => import('./components/Static.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./components/404.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  let existsUrl = router.options.routes,
      url = to.path,
      onExists = existsUrl.filter(item => {
        return item.path === url
      })
  if (onExists.length > 0) {
    next()
  } else {
    next()
    router.push('/404')
  }
})

export default router