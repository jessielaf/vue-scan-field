export default async framework => {
  if (framework === 'vuetify') {
    return {
      components: {
        // text_field: require('vuetify/lib/components/VTextField').default,
        // textarea: require('vuetify/lib/components/VTextarea').default,
        // checkbox: require('vuetify/lib/components/VCheckbox/VCheckbox').default,
        // select: require('vuetify/lib/components/VAutocomplete').default,
        // date: require('@/input-components/vuetify/DatePicker').default
      },
      getAttrs: (typeField, errors) => {
        const attrs = {}

        attrs.errorMessages = errors

        return attrs
      }
    }
  } else if (framework === 'quasar') {
    return {
      getAttrs: (typeField, errors) => {
        const attrs = {}
        attrs.errorMessages = errors

        if (typeField === 'textarea') attrs.type = 'textarea'

        return attrs
      }
    }
  }
}
