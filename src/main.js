import Field from './ScanField'

export default {
  install: (Vue, { field = 'ScanField' } = {}) => {
    Vue.component(field, Field)
  }
}
