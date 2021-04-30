import DatePicker from '@/input-components/vuetify/DatePicker'

export default {
  components: {
    scan_text_field: () => import('vuetify/lib/components/VTextField'),
    scan_textarea: () => import('vuetify/lib/components/VTextarea'),
    scan_checkbox: () => import('vuetify/lib/components/VCheckbox/VCheckbox'),
    scan_select: () => import('vuetify/lib/components/VAutocomplete'),
    scan_date: DatePicker
  },
  getAttrs: (typeField, validationAttrs) => {
    const attrs = {}

    attrs.errorMessages = validationAttrs.errors

    return attrs
  }
}
