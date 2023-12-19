import { createApp } from 'vue'
import { createPinia } from 'pinia'  // 导入入状态管理工具
import App from './6-vant/App.vue'  
import router from './6-vant/router/index.js'   //导入路由配置
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import 'vant/lib/index.css';


// 导入配置
import './6-vant/util/config.js'

const app = createApp(App)
app.use(router)  // 注册路由插件
app.use(createPinia()) // 注册状态管理插件
// app.use(ElementPlus)
app.mount('#app')
