import Field from './ScanField.vue'

export default {
  install: (Vue, { field = 'ScanField' } = {}) => {
    Vue.component(field, Field)
  }
}
