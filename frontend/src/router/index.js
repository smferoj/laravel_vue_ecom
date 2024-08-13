import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
      },
    {
        path: '/login',
        name: 'login',
        component: Login
      },
]

const router = createRouter({
  history: createWebHistory(),
  routes 
})

export default router

