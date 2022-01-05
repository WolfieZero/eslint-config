module.exports = {
  rules: {
    'no-console': ['warn', { allow: ['info', 'warn', 'error', 'debug', 'table'] }],
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        replacements: {
          props: false,
          env: false,
        },
      },
    ],
  },
};
