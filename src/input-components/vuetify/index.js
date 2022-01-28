import { VTextarea, VCheckbox, VAutocomplete, VTextField } from 'vuetify/lib'
import DatePicker from '@/input-components/vuetify/DatePicker'

export default {
  components: {
    textFieldScanField: VTextField,
    textareaScanField: VTextarea,
    checkboxScanField: VCheckbox,
    selectScanField: VAutocomplete,
    dateScanField: DatePicker
  },
  getAttrs: (field, parseInfo, validationAttrs) => {
    const attrs = {}

    attrs.items = parseInfo.items
    attrs.errorMessages = validationAttrs.errors
    if (parseInfo.items) {
      attrs.items = parseInfo.items.map(element => ({
        text: element.label,
        value: element.value
      }))
    }

    return attrs
  }
}
