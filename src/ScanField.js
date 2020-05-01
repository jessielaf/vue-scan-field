import { ValidationProvider } from 'vee-validate'
import { defineComponent, createElement as h, ref, watch } from '@vue/composition-api'

export default defineComponent({
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
    const typeField = ref('v-text-field')

    const calculate = () => {
      // Change element if defined
      if (props.field.attributes && props.field.attributes.element) {
        typeField.value = {
          textarea: 'v-text-area',
          checkbox: 'v-check-box',
          select: 'v-autocomplete'
        }[props.field.attributes.element]
      }

      // Add items if it is a select and all the options are defined
      if (props.field.attributes.element === 'select' && props.field.attributes.options && props.field.validator.oneOf) {
        attrs.items = props.field.attributes.options.map((element, index) => ({
          text: element,
          value: props.field.validator.oneOf[index]
        }))
      }
    }

    calculate()
    watch(() => props.field, calculate)

    return { typeField }
  },
  render() {
    return h(ValidationProvider, {
      attrs: {
        rules: this.field.validator || '',
        name: this.label,
        vid: this.id,
        slim: true
      },
      scopedSlots: {
        default: props => {
          return h(this.typeField, {
            attrs: {
              id: this.id,
              name: this.id,
              label: this.label,
              errorMessages: props.errors,
              ...this.$attrs
            },
            listeners: {
              ...this.$listeners
            }
          })
        }
      }
    })
  }
})
