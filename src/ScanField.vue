<template lang="pug">
  ValidationProvider(:name="label" :vid="id" :rules="field.validator || ''" v-slot="{ errors }" slim)
    component(:is="typeField" v-bind="$attrs" v-on="$listeners" :id="id" :name="id" :label="label" :errorMessages="errors")
</template>

<script>
import { ref, watch } from '@vue/composition-api'
import { ValidationProvider } from 'vee-validate'

const componentMapping = (function() {
  if (require.resolve('vuetify')) {
    return {
      text_field: import('vuetify/lib/components/VTextField'),
      textarea: import('vuetify/lib/components/VTextarea'),
      checkbox: import('vuetify/lib/components/VCheckbox/VCheckbox'),
      select: import('vuetify/lib/components/VAutocomplete'),
      date: import('@/input-components/vuetify/DatePicker')
    }
  }
})()

export default {
  components: {
    ValidationProvider
  },
  props: {
    id: {
      type: String,
      required: true
    },
    field: {
      type: Object,
      required: true
    },
    label: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs }) {
    const typeField = ref({ render: () => '' })

    componentMapping[props.field.attributes.element].then(
      m => (typeField.value = m.default)
    )

    const calculate = () => {
      // Add items if it is a select and all the options are defined
      if (
        props.field.attributes.element === 'select' &&
        props.field.attributes.options &&
        props.field.validator.oneOf
      ) {
        attrs.items = props.field.attributes.options.map((element, index) => ({
          text: element,
          value: props.field.validator.oneOf[index]
        }))
      }
    }

    calculate()
    watch(() => props.field, calculate)

    return { typeField }
  }
}
</script>
