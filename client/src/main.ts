import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import type {Component} from 'vue'

import ui from '@/UI';
import router from './pages'


const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

ui.forEach((component:Component) => {
    app.component(<string>component.name, component)
})

app.mount('#app')
