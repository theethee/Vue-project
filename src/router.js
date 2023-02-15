import { createRouter, createWebHashHistory } from "vue-router"

import Women from "./views/WomenView.vue"
import Home from "./views/HomeView.vue"
import Men from "./views/MenView.vue"
import Jewlery from "./views/JewleryView.vue"
import Electronics from "./views/ElectronicsView.vue"
import Cart from "./views/CartView.vue"
import Checkout from "./views/CheckoutView.vue"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: Women,
      path: "/women",
      name: Women
    },
    {
      component: Home,
      path: "/"
    },
    {
      component: Men,
      path: "/men",
      name: Men
    },
    {
      component: Jewlery,
      path: "/jewlery",
      name: Jewlery
    },
    {
      component: Electronics,
      path: "/electronics",
      name: Electronics
    },
    {
      component: Cart,
      path: "/cart"
    },
    {
      component: Checkout,
      path: "/checkout"
    }
  ]
})
