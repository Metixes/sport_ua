import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' // 👉 Імпорт маршрутизатора
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import Tooltip from 'primevue/tooltip'

import 'primeicons/primeicons.css'
import './assets/main.css'

const app = createApp(App)

app.directive('tooltip', Tooltip)

app
  .use(router)
  .use(createPinia())
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })

app.mount('#app')
