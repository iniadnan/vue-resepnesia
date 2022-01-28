import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/masuk',
    name: 'Masuk',
    component: () => import('@/views/Masuk.vue')
  },
  {
    path: '/daftar',
    name: 'Daftar',
    component: () => import('@/views/Daftar.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
