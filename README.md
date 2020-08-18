# Vue scan field
Use scanned backend models to generate validation and forms

This module goes hand in hand with [Django scan models](https://github.com/jessielaf/django-scan-models).

## Install

```shell script
npm install vue-scan-field
```
or
```shell script
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
```js
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

#### Date component

The date component is custom made so it can be used as `ScanField`. To pass properties to the `v-date-picker` you can do this via the attribute `:pickerAttrs`

## Without scan models

The most noticeable attribute on `ScanField` is `:field`. This is the field from the validator of the `scan models` package. You can also use this package without the `scan models` package.

TODO: Specifications for creating your own field json files. 