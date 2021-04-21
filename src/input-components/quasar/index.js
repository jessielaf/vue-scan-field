import { QCheckbox, QInput, QSelect } from 'quasar'

export default {
  components: {
    text_field: QInput,
    textarea: QInput,
    checkbox: QCheckbox,
    select: QSelect,
    date: () => null
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
