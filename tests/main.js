import Vue from 'vue'
import App from './App'
import VueCompositionApi from '@vue/composition-api'
import VueScanField from 'vue-scan-field/dist/vuetify'
import Vuetify from 'vuetify/lib'
import { extend } from 'vee-validate'
import {
  required,
  max,
  max_value,
  min_value,
  email,
  is,
  oneOf
} from 'vee-validate/dist/rules.umd'

Vue.use(VueCompositionApi)
Vue.use(Vuetify)

Vue.use(VueScanField)

extend('required', required)
extend('max', max)
extend('email', email)
extend('max_value', max_value)
extend('min_value', min_value)
extend('is', is)
extend('oneOf', oneOf)

new Vue({
  vuetify: new Vuetify({
    theme: {
      options: {
        customProperties: true
      }
    }
  }),
  render: h => h(App)
}).$mount('#app')
