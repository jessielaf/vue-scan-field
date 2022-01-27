<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-form @submit="submit">
        <ScanField
          v-for="(field, name) in fields"
          :key="name"
          :field="field"
          :id="name"
          :label="name"
          v-model="data[name]"
        />
        <q-btn type="submit">Submit</q-btn>
      </q-form>
    </q-page-container>
  </q-layout>
</template>

<script>
import fields from './fields.json'
import { ref } from '@vue/compat'
import { useForm } from 'vee-validate'

export default {
  setup() {
    const data = ref({})

    const { handleSubmit } = useForm()

    const submit = handleSubmit(data => {
      console.log('hioer')
      console.log(data)
    })

    return { submit, fields, data }
  }
}
</script>

<style scoped lang="scss">
@import '~quasar/dist/quasar.css';
</style>
