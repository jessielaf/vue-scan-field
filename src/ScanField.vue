<template lang="pug">
  ValidationProvider(v-if="componentName" :name="label" :vid="id" :rules="field.validator || ''" v-slot="validationAttrs" slim)
    component(:is="componentName" v-bind="parse($attrs, field.attributes.element, validationAttrs)" v-on="$listeners" :id="id" :name="id" :label="label")
  NotSupported(v-else :field="field")
</template>

<script>
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
  methods: {
    calculate(field) {
      // Add items if it is a select and all the options are defined
      if (
        field.attributes.element === 'select' &&
        field.attributes.options &&
        field.validator.oneOf
      ) {
        this.attrs.items = field.attributes.options.map((element, index) => ({
          text: element,
          value: this.field.validator.oneOf[index]
        }))
      }
    },
    parse(attrs, typeField, errors) {
      return {
        ...attrs,
        ...this.$scanField.getAttrs(typeField, errors)
      }
    }
  },
  computed: {
    componentName() {
      const name = (this.field.attributes.element || 'textField') + 'ScanField'

      return name in this.$options.components ? name : ''
    }
  },
  created() {
    this.calculate(this.field)
  },
  watch: {
    field(val) {
      this.calculate(val)
    }
  }
}
</script>
