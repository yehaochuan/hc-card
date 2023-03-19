import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      title: '首页',
      component: () => import('/@/view/myHome/index.vue'),
    },
    {
      path: '/myNav',
      title: '导航',
      component: () => import('/@/view/myNav/index.vue'),
    },
  ]
})

export default router;