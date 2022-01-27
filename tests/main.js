import { createApp } from 'vue'
import App from './App2.vue'
import { Quasar } from 'quasar'
import VueScanField from '../src/entryPoint'

createApp(App)
  .use(Quasar, {
    config: {},
    plugins: {}
  })
  .use(VueScanField)
  .mount('#app')
