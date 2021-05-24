import vue from 'rollup-plugin-vue'
import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import buble from '@rollup/plugin-buble'
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import jscc from 'rollup-plugin-jscc'

const customResolver = resolve({
  extensions: ['.mjs', '.js', '.vue', '.jsx', '.json', '.sass', '.scss', '.ts']
})
const projectRootDir = path.resolve(__dirname)

export default cliArguments => {
  const framework = cliArguments.framework

  delete cliArguments.framework

  return {
    input: 'src/entryPoint.js',
    output: {
      name: 'VueScanField',
      exports: 'named',
      format: 'es',
      file: `dist/${framework}.js`
    },
    plugins: [
      jscc({
        values: { _FRAMEWORK: framework },
        include: '*/entryPoint.js',
        exclude: '*'
      }),
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
        objectAssign: 'Object.assign',
        transforms: {
          asyncAwait: false
        }
      }),
      terser()
    ]
  }
}
