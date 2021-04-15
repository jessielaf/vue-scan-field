<template lang="pug">
  ValidationProvider(v-if="typeField" :name="label" :vid="id" :rules="field.validator || ''" v-slot="{ errors }" slim)
    component(:is="typeField" v-bind="parse(typeField, errors)" v-on="$listeners" :id="id" :name="id" :label="label")
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
  data() {
    return {
      typeField: this.$scanField.frameworkMapping.components[
        this.field.attributes.element || 'text_field'
      ],
      parse(typeField, errors) {
        return {
          ...this.$scanField.frameworkMapping.getAttrs(typeField, errors)
        }
      }
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
