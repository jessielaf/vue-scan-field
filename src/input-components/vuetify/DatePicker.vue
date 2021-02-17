<template lang="pug">
  v-menu(v-model="menu" :close-on-content-click="false" transition="scale-transition" min-width="290px")
    template(v-slot:activator="{ on, attrs }")
      v-text-field(:value="formattedValue" :label="label" readonly v-bind="{ ...attrs, ...$attrs }" v-on="{ ...on, ...$listeners }")
    v-date-picker(:value="value" @input="handleInput" @change="$emit('change', $event)" v-bind="pickerAttrs" no-title scrollable)
      v-spacer
      v-btn(text color="primary" @click="menu = false") Close
</template>

<script>
import { ref } from '@vue/composition-api'
import { parseISO, format } from 'date-fns'
import {
  VMenu,
  VTextField,
  VSpacer,
  VDatePicker,
  VBtn
} from 'vuetify/lib/components'

export default {
  props: {
    value: {
      type: null,
      default: undefined
    },
    dateFormat: {
      type: String,
      default: 'dd MMMM yyyy'
    },
    label: {
      type: String,
      default: ''
    },
    pickerAttrs: {
      type: Object,
      default: () => {}
    }
  },
  components: { VMenu, VTextField, VSpacer, VDatePicker, VBtn },
  setup(props, { emit }) {
    const menu = ref(false)
    const formattedValue = ref('')

    const handleInput = value => {
      emit('input', value)
      formattedValue.value = format(parseISO(value), props.dateFormat)
    }

    return { menu, formattedValue, handleInput }
  }
}
</script>
