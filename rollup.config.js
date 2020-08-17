import vue from 'rollup-plugin-vue'
import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import buble from '@rollup/plugin-buble'
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'

const customResolver = resolve({
  extensions: ['.mjs', '.js', '.vue', '.jsx', '.json', '.sass', '.scss']
})
const projectRootDir = path.resolve(__dirname)

export default {
  input: 'src/main.js',
  output: {
    name: 'VueScanField',
    exports: 'named'
  },
  plugins: [
    commonjs(),
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(projectRootDir, 'src')
        }
      ],
      customResolver
    }),
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
