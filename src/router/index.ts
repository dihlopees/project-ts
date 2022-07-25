import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home-page.vue'
import Shope from "../pages/Shope-page.vue";
import Cadastro from "../pages/Cadastro-page.vue";
import Editar from "../pages/Editar-page.vue";
import Carrinho from "../pages/Carrinho-page.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: "/shope",
    name: "Shope",
    component: Shope,
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: Cadastro,
  },
  {
    path: "/editar/:id",
    name: "Editar",
    component: Editar,
  },
  {
    path: "/produtos/:id",
    name: "Carrinho",
    component: Carrinho,
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
