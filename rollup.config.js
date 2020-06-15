import vue from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import buble from '@rollup/plugin-buble'

export default {
  input: 'src/main.js',
  output: {
    name: 'VueScanField',
    exports: 'named'
  },
  plugins: [
    commonjs(),
    vue({
      template: {
        isProduction: true
      }
    }),
    buble({
      objectAssign: 'Object.assign'
    }),
    terser()
  ]
}
