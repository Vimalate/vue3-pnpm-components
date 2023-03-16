import { createApp } from 'vue'
import { createPinia } from 'pinia'
import shuge from  '@vimalakirti/shuge-ui'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(shuge)

app.mount('#app')
