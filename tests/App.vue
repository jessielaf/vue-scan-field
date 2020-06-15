<template>
  <v-app>
    <v-content>
      <v-container>
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
          <v-btn color="success" type="submit">Save</v-btn>
        </ValidationObserver>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api'
import validator from './validator.json'
import { ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationObserver
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
