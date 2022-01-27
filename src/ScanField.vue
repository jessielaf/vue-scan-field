<template lang="pug">
div
  component(v-if="componentName" :is="componentName" v-model="value" v-bind="parse($attrs)" :id="id" :name="id" :label="label")
  NotSupported(v-else :field="field")
</template>

<script>
import NotSupported from '@/input-components/NotSupported'
import frameworkMapping from '@/input-components/framework-mapping'
import { computed, getCurrentInstance } from 'vue'
import { useField } from 'vee-validate'
import * as yup from 'yup'

export default {
  components: {
    NotSupported,
    ...frameworkMapping.components
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
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const app = getCurrentInstance()

    const validatorToYup = validator => {
      let yupValidator = yup.string()

      for (const [key, value] of Object.entries(validator)) {
        if (typeof value == 'boolean') {
          yupValidator = yupValidator[key]()
        } else {
          yupValidator = yupValidator[key](value)
        }
      }

      // Make the value clearable / nullable if it is not required
      if (!validator.required) {
        yupValidator = yupValidator.nullable()
      }

      return yupValidator
    }

    const { value, ...validation } = useField(
      props.id,
      validatorToYup(props.field.validator),
      {
        initialValue: props.modelValue || props.field.attributes.default
      }
    )

    const componentName = computed(() => {
      const name = (props.field.attributes.element || 'textField') + 'ScanField'

      return name in app.components ? name : ''
    })

    const getItems = () => {
      // Add items if it is a select and all the options are defined
      if (
        props.field.attributes.element === 'select' &&
        props.field.attributes.options &&
        props.field.validator.oneOf
      ) {
        return props.field.attributes.options.map((element, index) =>
          frameworkMapping.toSelectable(
            element,
            props.field.validator.oneOf[index]
          )
        )
      }
    }

    const parse = attrs => ({
      ...attrs,
      ...frameworkMapping.getAttrs(props.field, validation),
      items: getItems()
    })

    return {
      componentName,
      parse,
      value
    }
  }
}
</script>
