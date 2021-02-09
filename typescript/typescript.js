module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unicorn', 'prettier'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:unicorn/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': ['warn', { allow: ['info', 'warn', 'error', 'debug', 'table'] }],
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
