import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import cypress from 'cypress';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    ignores: ['node_modules', '.gitignore', 'dist'],
  },
  {
    plugins: { cypress },
  },
  {
    rules: {
      'no-undef': 'error',
      semi: 'error',
      'semi-spacing': 'error',

      //* Best Practices
      eqeqeq: 'warn',
      'no-invalid-this': 'error',
      'no-return-assign': 'error',
      'no-unused-expressions': ['error', { allowTernary: true }],
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-constant-condition': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: 'req|res|next|__' }],

      //* Enhance Readability
      indent: ['error', 2, { SwitchCase: 1 }],
      'no-mixed-spaces-and-tabs': 'warn',
      'space-before-blocks': 'error',
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      quotes: ['error', 'single'],

      'max-len': ['error', { code: 200 }],
      'max-lines': ['error', { max: 500 }],
      'keyword-spacing': 'error',
      'multiline-ternary': ['error', 'never'],
      'no-mixed-operators': 'error',

      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
      'no-whitespace-before-property': 'error',
      'nonblock-statement-body-position': 'error',
      'object-property-newline': [
        'error',
        { allowAllPropertiesOnSameLine: true },
      ],

      //* ES6
      'arrow-spacing': 'error',
      'no-confusing-arrow': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'object-shorthand': 'off',
      'prefer-const': 'error',
      'prefer-template': 'warn',
    },
  },
];
