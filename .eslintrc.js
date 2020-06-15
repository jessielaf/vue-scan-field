module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'never']
  }
}
