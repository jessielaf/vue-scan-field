<template>
  <VApp>
    <VMain>
      <VContainer>
        <h1>Test</h1>
        <ValidationObserver
          ref="formValidator"
          tag="form"
          @submit.prevent="submit"
        >
          <ScanField
            v-for="(field, name) in validator"
            :key="name"
            :field="field"
            :id="name"
            :label="name"
            v-model="model[name]"
          />
          <VBtn color="success" type="submit">Save</VBtn>
        </ValidationObserver>
      </VContainer>
    </VMain>
  </VApp>
</template>

<script>
import { ref } from '@vue/composition-api'
import validator from './validator.json'
import { ValidationObserver } from 'vee-validate'
import { VApp, VMain, VContainer, VBtn } from 'vuetify/lib/components'

export default {
  components: {
    ValidationObserver,
    VApp,
    VMain,
    VContainer,
    VBtn
  },
  setup() {
    const formValidator = ref(null)
    const model = ref({})

    const submit = () => {
      formValidator.value.validate().then(result => {
        console.log(result)
      })
    }

    return {
      validator,
      model,
      submit,
      formValidator
    }
  }
}
</script>
