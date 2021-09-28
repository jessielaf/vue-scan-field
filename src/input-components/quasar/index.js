import { QCheckbox, QInput, QSelect } from 'quasar'

export default {
  components: {
    textFieldScanField: QInput,
    textareaScanField: QInput,
    checkboxScanField: QCheckbox,
    selectScanField: QSelect,
    dateScanField: null
  },
  getAttrs: (typeField, field, validationAttrs) => {
    const attributes = {}
    attributes.errorMessage = validationAttrs.errorMessages[0]
    attributes.error = !validationAttrs.meta.valid && validationAttrs.checked

    if (typeField === 'textarea') attributes.type = 'textarea'

    if (!field.validator.required) attributes.clearable = true

    return attributes
  }
}
