export default {
  components: {
    scan_text_field: () => import('quasar/src/components/input/QInput'),
    scan_textarea: () => import('quasar/src/components/input/QInput'),
    scan_checkbox: () => import('quasar/src/components/checkbox/QCheckbox'),
    scan_select: () => import('quasar/src/components/select/QSelect'),
    scan_date: () => null
  },
  globals: {
    getAttrs: (typeField, validationAttrs) => {
      const attrs = {}
      attrs.errorMessage = validationAttrs.errors[0]
      attrs.error = validationAttrs.invalid && validationAttrs.validated

      if (typeField === 'textarea') attrs.type = 'textarea'

      return attrs
    }
  }
}
