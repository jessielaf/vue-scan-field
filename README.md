# Vue scan field
Use scanned models to generate forms based on your backend models

This module goes hand in hand with [Django scan models](https://github.com/jessielaf/django-scan-models).

## Install

```
npm install vue-scan-field
```
or
```
yarn add vue-scan-field
```

## Usage

### Vue plugin

You can install the vue app like:
```js
import Vue from 'vue'
import ScanField from 'vue-scan-field'

Vue.use(ScanField)
```

The default name for the field is `ScanField`. If you want to change this globally you can pass it as to the options.
```
import Vue from 'vue'
import ScanField from 'vue-scan-field'

Vue.use(ScanField, { field: 'MyCustomField' })
```

#### Importing

You can also directly import the component as such:

```js
import { ScanField } from 'vue-scan-field/ScanField'
```

### The component

```vue
<template>
    <ScanField v-model="user.username" :field="field" id="username" label="Username"></ScanField>
</template>
```

The most noticeable attribute on `ScanField` is `:field`. This is the field from the validator of the `scan models` package. Of course all the 