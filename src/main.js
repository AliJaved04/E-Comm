import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import router from './routes'
import Toaster from '@meforma/vue-toaster'
createApp(App).use(Toaster).use(bootstrap).use(router).mount('#app')
