import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { marketer } from './marketer.routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, ...marketer],
})

export default router
