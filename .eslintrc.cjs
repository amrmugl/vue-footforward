/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        tabWidth: 2,
        useTabs: false,
        printWidth: 80,
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'always',
      },
    ],
  },
}
