import { createApp } from 'vue'
import App from './App.vue'
import routes from '@/router'

import './assets/main.css'

createApp(App).use(routes).mount('#app')
