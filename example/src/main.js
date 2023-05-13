import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import shuge from  '@vimalakirti/shuge-ui'
import '@vimalakirti/shuge-ui/ui/es/style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(shuge)
app.use(ElementPlus)

app.mount('#app')
