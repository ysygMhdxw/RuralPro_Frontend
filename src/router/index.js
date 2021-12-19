import { createRouter, createWebHistory } from 'vue-router'
import CountyEcharts from '../views/CountyEcharts.vue'
import HomePage from "@/views/HomePage";
import county from "@/views/County";
import Population from "@/views/Population";
import TimeLineHome from "@/components/TimeLineHome";
import FormalPage from "@/views/FormalPage";
import page404 from "@/views/page404";


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
    path:"/formal",
    name:"formal",
    component: FormalPage
  },
  {
    path:"/timeline",
    name:"timeline",
    component:TimeLineHome
  },
  {
    path:"/unfinished",
    name:"404page",
    component: page404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
