import { createApp } from '@vue/runtime-dom'
import axios from 'axios'
import VueAxios from 'vue-axios'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Password from 'primevue/password'

import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import App from '@/App.vue'
import router from '@/router'
import {store} from "@/store"


createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(store)
    .component('InputText', InputText)
    .component('Button', Button)
    .component('Password', Password)
    .mount('#app')
