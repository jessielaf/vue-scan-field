<template lang="pug">
  ValidationProvider(:name="label" :vid="id" :rules="field.validator || ''" v-slot="{ errors }" slim)
    component(:is="typeField" v-bind="$attrs" v-on="$listeners" :id="id" :name="id" :label="label" :errorMessages="errors")
</template>

<script>
import { ref, watch } from '@vue/composition-api'
import {
  VTextField,
  VTextarea,
  VCheckbox,
  VAutocomplete
} from 'vuetify/lib/components'
import { ValidationProvider } from 'vee-validate'
import DatePicker from '@/input-components/DatePicker'

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
    const typeField = ref(VTextField)

    const calculate = () => {
      // Change element if defined
      if (props.field.attributes && props.field.attributes.element) {
        typeField.value = {
          textarea: VTextarea,
          checkbox: VCheckbox,
          select: VAutocomplete,
          date: DatePicker
        }[props.field.attributes.element]
      }

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
