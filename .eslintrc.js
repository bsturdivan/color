/* eslint-env node */
const prettierConfig = require('./prettier.config')

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Waypoint: false, // from waypoints
  },
  plugins: ['prettier', 'react', 'jsx-a11y', 'react-hooks'],
  root: true,
  rules: {
    camelcase: 0,
    // Because we might be overriding a parent or mocking:
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'import/no-named-as-default': 0, // See https://redux.js.org/recipes/writing-tests#connected-components
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-else-return': 0,
    'no-return-assign': 0,
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'no-restricted-imports': [
      2,
      {
        name: '@everlane/link',
        message: 'Please use <EverlaneLink> instead.',
      },
    ],
    'prettier/prettier': ['error', prettierConfig],
    'react/jsx-fragments': [2, 'element'],
    'react/prop-types': [2, { skipUndeclared: true }],
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/forbid-elements': [
      2,
      { forbid: [{ element: 'a', message: 'use <RouterLink> instead' }] },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    {
      files: ['**/*.config.js', '**/.eslintrc.js'],
    },
  ],
  env: {
    es6: false,
    browser: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
