import { createRouter, createWebHistory } from "vue-router"
import About from '@/pages/About'
import NotesPage from "@/pages/NotesPage"

const routes = [
  {
    path: '/',
    component: NotesPage
  },
  {
    path: '/about',
    component: About
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router