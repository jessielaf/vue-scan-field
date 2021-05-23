/*#if _FRAMEWORK == 'quasar'
import frameworkMapping from '@/input-components/quasar'
//#else */
import frameworkMapping from '@/input-components/vuetify'
//#endif

import Field from './ScanField.vue'

export default {
  install: (Vue, { field = 'ScanField' } = {}) => {
    Vue.prototype.$scanField = {
      getAttrs: frameworkMapping.getAttrs
    }

    Field.components = {
      ...Field.components,
      ...frameworkMapping.components
    }
    Vue.component(field, Field)
  }
}
