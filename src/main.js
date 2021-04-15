import Field from './ScanField.vue'
import getFrameworkMapping from '@/input-components/main'

export default {
  install: (Vue, { field = 'ScanField', framework = 'vuetify' } = {}) => {
    getFrameworkMapping(framework).then(frameworkMapping => {
      Vue.prototype.$scanField = {
        framework,
        frameworkMapping
      }

      Vue.component(field, Field)
    })
  }
}
