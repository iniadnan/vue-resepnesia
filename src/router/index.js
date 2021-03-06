import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/resep/',
    name: 'Resep',
    component: () => import('@/views/Resep.vue')
  },
  {
    path: '/daerah/',
    name: 'Daerah',
    component: () => import('@/views/Daerah.vue')
  },
  {
    path: '/daerah/:daerah/',
    name: 'DaerahDetail',
    component: () => import('@/views/DaerahDetail.vue')
  },
  {
    path: '/tersimpan/',
    name: 'Tersimpan',
    component: () => import('@/views/Tersimpan.vue')
  },
  {
    path: '/blog/',
    name: 'Blog',
    component: () => import('@/views/Blog.vue')
  },
  {
    path: '/masuk/',
    name: 'Masuk',
    component: () => import('@/views/Masuk.vue')
  },
  {
    path: '/daftar/',
    name: 'Daftar',
    component: () => import('@/views/Daftar.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
