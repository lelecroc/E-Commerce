import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import CheckOutView from '../views/CheckOutView.vue'
import SinglePeluchePage from '../views/SinglePeluchePage.vue'
import SingleCardPage from '../views/SingleCardPage.vue'
import SingleGamePage from '../views/SingleGamePage.vue'
import ProductCard from '@/components/ProductCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound
    },
    {
      path: "/checkout",
      name: "Carrello",
      component: CheckOutView
    },
    {
      path: "/game/:name",
      component: SingleGamePage
    },
    {
      path: "/peluche/:name",
      component: SinglePeluchePage
    },
    {
      path: "/card/:name",
      component: SingleCardPage
    }
  ]
})

export default router
