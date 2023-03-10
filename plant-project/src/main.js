import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'

import mitt from 'mitt'

import './assets/main.css'

const emitter = mitt()
const app = createApp(App)

app.config.globalProperties.emitter = emitter

app.use(router)
app.use(PrimeVue)

app.component('Dialog', Dialog)
app.component('InputText', InputText)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Button', Button)

app.mount('#app')
