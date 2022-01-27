import { QCheckbox, QInput, QSelect } from 'quasar'

export default {
  components: {
    textFieldScanField: QInput,
    textareaScanField: QInput,
    checkboxScanField: QCheckbox,
    selectScanField: QSelect,
    dateScanField: null
  },
  getAttrs: (field, validationAttrs) => {
    const attributes = {}

    attributes.errorMessage = validationAttrs.errorMessage.value
    attributes.error =
      !validationAttrs.meta.valid && validationAttrs.meta.validated

    console.log(field.attributes.element === 'textarea')
    if (field.attributes.element === 'textarea') attributes.type = 'textarea'

    if (!field.validator.required) attributes.clearable = true

    return attributes
  },
  toSelectable: (label, value) => ({
    label,
    value
  })
}
