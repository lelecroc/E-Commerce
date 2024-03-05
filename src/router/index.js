import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import CheckOutView from '../views/CheckOutView.vue'
import SinglePage from '../views/SinglePage.vue'
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
      path: "/peluche/:name",
      component: SinglePage
    }
  ]
})

export default router
