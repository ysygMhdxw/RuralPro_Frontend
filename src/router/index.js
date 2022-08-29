import { createRouter, createWebHistory } from 'vue-router'
import CountyEcharts from '../views/CountyEcharts.vue'
import HomePage from "@/views/HomePage";
import county from "@/views/County";
import TimeLineHome from "@/components/TimeLineHome";
import FormalPage from "@/views/FormalPage";
import page404 from "@/views/page404";
import PovertyData from "@/views/PovertyData";
import PovertyStory from "@/views/PovertyStory";
import DataOverview from "@/views/DataOverview";
import DataScreen from "@/views/DataScreen";
import DataTest from "@/views/DataTest";
import CountyNews from "@/views/CountyNews";
import QuestionPage from "@/views/QuestionPage";
import BodyMap2 from "@/components/BodyMap2";



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
    path:"/question",
    name:"question",
    component: QuestionPage
  },{

    path:"/timeline",
    name:"timeline",
    component:TimeLineHome
  },
  {
    path:"/unfinished",
    name:"404page",
    component: page404
  },
  {
    path:"/dataVisualization",
    name:"PovertyData",
    component: PovertyData
  },
  {
    path:"/povertyStory",
    name:"povertyStory",
    component: PovertyStory
  },
  {
    path:"/DataOverview",
    name:"DataOverview",
    component: DataOverview
  },
  {
    path:"/DataScreen",
    name:"DataScreen",
    component: DataScreen
  },
  {
    path:"/datatest",
    name:"DataTest",
    component: DataTest
  },
  {
    path:"/countynews",
    name:"CountyNews",
    component: CountyNews
  },
  {
    path:"/map",
    name: "BodyMap2",
    component: BodyMap2
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
