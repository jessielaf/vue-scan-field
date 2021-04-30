<template lang="pug">
  ValidationProvider(v-if="field.attributes.element" :name="label" :vid="id" :rules="field.validator || ''" v-slot="{ errors }" slim)
    component(:is="'scan_' + field.attributes.element" v-bind="parse($attrs, field.attributes.element, errors)" v-on="$listeners" :id="id" :name="id" :label="label")
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
