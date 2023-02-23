import { createApp } from 'vue'
import App from './App.vue'
import TUI from '../packages/index'
import router from '../src/router'
const app =createApp(App)
app.use(TUI)
app.use(router)
app.mount('#app')
