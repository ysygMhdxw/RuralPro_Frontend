import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import * as d3 from "d3";
import '@/assets/css/global.css'

const app=createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(store).use(router).use(d3).mount('#app')
