# Vue scan field

Automatically generate forms and validation based on your backend models

This module goes hand in hand with [Django scan models](https://github.com/jessielaf/django-scan-models).

> `vue-scan-field` now works with `vuetify` and `quasar`

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
import ScanField from 'vue-scan-field/dist/vuetify'

Vue.use(ScanField)
```

#### Framework

The default framework is `vuetify`. This if for backwards compatibility. We will remove the default in future so we recommend always using the framework option.

Available options are (more will be added over time):
- `vuetify`
- `quasar`

```js
import Vue from 'vue'
import ScanField from 'vue-scan-field/dist/quasar'

Vue.use(ScanField)
```

> Do not import `vue-scan-field` directly. This functionality will be removed in future versions

#### Field name

The default name for the field is `ScanField`. If you want to change this globally you can pass it as to the options.
```js
import Vue from 'vue'
import ScanField from 'vue-scan-field/dist/vuetify'

Vue.use(ScanField, { field: 'MyCustomField' })
```

### The component

```vue
<template>
    <ScanField v-model="user.username" :field="field" id="username" label="Username"></ScanField>
</template>
```

#### Vuetify date component

The date component is custom made so it can be used as `ScanField`. To pass properties to the `v-date-picker` you can do this via the attribute `:pickerAttrs`

## Without scan models

The most noticeable attribute on `ScanField` is `:field`. This is the field from the validator of the `scan models` package. You can also use this package without the `scan models` package.

TODO: Specifications for creating your own field json files. 