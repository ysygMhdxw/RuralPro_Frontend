import { createRouter, createWebHistory } from 'vue-router'
import CountyEcharts from '../views/CountyEcharts.vue'
import HomePage from "@/views/HomePage";
import county from "@/views/County";
import Population from "@/views/Population";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: "/CountyEcharts",
    name: "CountyEcharts",
    component: CountyEcharts
  },
  {
    path:"/County",
    name:"County",
    component: county
  }
  ,
  {
    path:"/population",
    name:"population",
    component: Population
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
