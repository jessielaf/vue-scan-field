import { QCheckbox, QInput, QSelect } from 'quasar'

export default {
  components: {
    scan_text_field: QInput,
    scan_textarea: QInput,
    scan_checkbox: QCheckbox,
    scan_select: QSelect,
    scan_date: () => null
  },
  globals: {
    getAttrs: (typeField, errors) => {
      const attrs = {}
      attrs.errorMessages = errors

      if (typeField === 'textarea') attrs.type = 'textarea'

      return attrs
    }
  }
}
