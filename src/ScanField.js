import { ValidationProvider } from 'vee-validate'
import {
  defineComponent,
  createElement as h,
  ref,
  watch
} from '@vue/composition-api'
import VTextField from 'vuetify/lib/components/VTextField'
import VTextarea from 'vuetify/lib/components/VTextarea'
import VCheckbox from 'vuetify/lib/components/VCheckbox'
import VAutocomplete from 'vuetify/lib/components/VAutocomplete'

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
    const typeField = ref(VTextField)

    const calculate = () => {
      // Change element if defined
      if (props.field.attributes && props.field.attributes.element) {
        typeField.value = {
          textarea: VTextarea,
          checkbox: VCheckbox,
          select: VAutocomplete
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
