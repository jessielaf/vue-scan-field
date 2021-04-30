import Field from './ScanField.vue'
import quasar from '@/input-components/quasar'
import vuetify from '@/input-components/vuetify'

export default {
  install: (Vue, { field = 'ScanField', framework = 'vuetify' } = {}) => {
    let frameworkMapping = vuetify
    if (framework === 'quasar') {
      frameworkMapping = quasar
    }

    Vue.prototype.$scanField = {
      framework,
      ...frameworkMapping.globals
    }

    Field.components = { ...Field.components, ...frameworkMapping.components }
    Vue.component(field, Field)
  }
}
