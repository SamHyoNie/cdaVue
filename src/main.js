import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
// const app = createApp(App); autre façon de faire
// app.use(router);
// app.mount('#app');