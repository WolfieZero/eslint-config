const { rules } = require('../shared/base');

module.exports = {
  ...require('../shared/base'),
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unicorn'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
  ],
  rules: {
    ...rules,
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        replacements: {
          props: false,
        },
      },
    ],
  },
};
