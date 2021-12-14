import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomePage from "@/views/HomePage";
import BodyMap from "@/components/BodyMap";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: "/HomePage",
    name: "HomePage",
    component: Home
  },
  {
    path:"/Map",
    name:"BodyMap",
    component: BodyMap
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
