import Vue from 'vue'
import Router from 'vue-router'
import routerPath from './routerPath'
// import LocalStorageManager from '../LocalStorageManager'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: routerPath.HOME,
      meta: {
        menuName: '메인'
      },
      component: () => import('@/pages/main/main.vue'),
    },
    { path: '*', redirect: routerPath.HOME }
  ]
})

export default router

