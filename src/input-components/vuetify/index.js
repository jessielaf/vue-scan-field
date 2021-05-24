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
  getAttrs: (typeField, validationAttrs) => {
    const attrs = {}

    attrs.errorMessages = validationAttrs.errors

    return attrs
  }
}
