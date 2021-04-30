import { VAutocomplete, VCheckbox, VTextarea, VTextField } from 'vuetify/lib'
import DatePicker from '@/input-components/vuetify/DatePicker'

export default {
  components: {
    scan_text_field: () => VTextField,
    scan_textarea: () => VTextarea,
    scan_checkbox: () => VCheckbox,
    scan_select: () => VAutocomplete,
    scan_date: () => DatePicker
  },
  getAttrs: (typeField, errors) => {
    const attrs = {}

    attrs.errorMessages = errors

    return attrs
  }
}