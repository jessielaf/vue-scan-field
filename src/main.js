import Field from './ScanField.vue'

export default {
  install: (Vue, { field = 'ScanField', framework = 'vuetify' } = {}) => {
    import('@/input-components/' + framework).then(module => {
      Vue.prototype.$scanField = {
        framework,
        ...module.globals
      }

      Field.components = { ...Field.components, ...module.components }
      Vue.component(field, Field)
    })
    // const { components, globals } = require('@/input-components/' + framework)
    //
    // Vue.prototype.$scanField = {
    //   framework,
    //   ...globals
    // }
    //
    // Field.components = { ...Field.components, ...components }
    // Vue.component(field, Field)
  }
}
