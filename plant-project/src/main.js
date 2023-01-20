import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.component('Dialog', Dialog)
app.component('InputText', InputText)

app.mount('#app')
