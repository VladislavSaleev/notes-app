import { createRouter, createWebHistory } from "vue-router"
import About from '@/pages/About'
import NotesPage from "@/pages/NotesPage"
import NotesPageStore from '@/pages/NotesPageStore'
const routes = [
  {
    path: '/',
    component: NotesPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/store',
    component: NotesPageStore
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router