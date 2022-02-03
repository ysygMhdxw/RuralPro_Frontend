import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import '@/assets/css/global.css'
import * as echarts from 'echarts';
import * as ElIcons from '@element-plus/icons';



const app=createApp(App)
for (const name in ElIcons){
    app.component(name,ElIcons[name])
}
app.use(echarts);
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(store).use(router).mount('#app')

