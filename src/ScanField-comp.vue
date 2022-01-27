<template lang="pug">
  ValidationProvider(v-if="typeField" :name="label" :vid="id" :rules="field.validator || ''" v-slot="{ errors }" slim)
    component(:is="typeField" v-bind="parseAttrs($attrs, typeField, errors)" v-on="$listeners" :id="id" :name="id" :label="label")
  NotSupported(v-else :field="field")
</template>

<script>
import { ref, watch } from '@vue/composition-api'
import { ValidationProvider } from 'vee-validate'
import NotSupported from '@/input-components/NotSupported'

export default {
  components: {
    NotSupported,
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
  setup(props, { root, attrs }) {
    const typeField = ref(
      root.$scanField.frameworkMapping.components[
        props.field.attributes.element || 'text_field'
      ]
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

    return {
      typeField,
      parseAttrs: root.$scanField.frameworkMapping.parseAttrs
    }
  }
}
</script>
