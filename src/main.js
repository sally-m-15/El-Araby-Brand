import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "vue3-toastify/dist/index.css";
import './assets/main.css'

import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { icons } from './icons/icons';

const app = createApp(App)

addIcons(... icons);

app.component("v-icon", OhVueIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
