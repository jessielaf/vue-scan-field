<template lang="pug">
  div {{ field.attributes.element }} is not supported for the {{ $scanField.framework }} framework
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true
    }
  }
}
</script>
