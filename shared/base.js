module.exports = {
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
