import { QCheckbox, QInput, QSelect } from 'quasar'

export default {
  components: {
    textFieldScanField: QInput,
    textareaScanField: QInput,
    checkboxScanField: QCheckbox,
    selectScanField: QSelect,
    dateScanField: null
  },
  getAttrs: (typeField, validationAttrs) => {
    const attrs = {}
    attrs.errorMessage = validationAttrs.errors[0]
    attrs.error = validationAttrs.invalid && validationAttrs.validated

    if (typeField === 'textarea') attrs.type = 'textarea'

    return attrs
  }
}
