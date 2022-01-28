import { QCheckbox, QInput, QSelect } from 'quasar'

export default {
  components: {
    textFieldScanField: QInput,
    textareaScanField: QInput,
    checkboxScanField: QCheckbox,
    selectScanField: QSelect,
    dateScanField: null
  },
  getAttrs: (field, parseInfo, validationAttrs) => {
    const attrs = {}
    attrs.errorMessage = validationAttrs.errors[0]
    attrs.error = validationAttrs.invalid && validationAttrs.validated

    if (field.attributes.element === 'textarea') attrs.type = 'textarea'

    if (parseInfo.items) {
      attrs.options = parseInfo.items
      attrs.emitValue = true
      attrs.mapOptions = true
    }

    return attrs
  }
}
