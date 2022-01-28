<template lang="pug">
  ValidationProvider(v-if="componentName" :name="label" :vid="id" :rules="field.validator || ''" v-slot="validationAttrs" slim)
    component(:is="componentName" :value="value" v-bind="parse($attrs, validationAttrs)" v-on="$listeners" :id="id" :name="id" :label="label")
  NotSupported(v-else :field="field")
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import NotSupported from '@/input-components/NotSupported'
import frameworkMapping from '@/frameworkMapping'

export default {
  components: {
    NotSupported,
    ValidationProvider,
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
    value: {
      type: null,
      default: ''
    }
  },
  data: () => ({
    parseInfo: {}
  }),
  methods: {
    calculate(field) {
      // Add items if it is a select and all the options are defined
      if (
        field.attributes.element === 'select' &&
        field.attributes.options &&
        field.validator.oneOf
      ) {
        this.parseInfo.items = field.attributes.options.map(
          (element, index) => ({
            label: element,
            value: this.field.validator.oneOf[index]
          })
        )
      }
    },
    parse(attrs, errors) {
      return {
        ...attrs,
        ...frameworkMapping.getAttrs(this.field, this.parseInfo, errors)
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
