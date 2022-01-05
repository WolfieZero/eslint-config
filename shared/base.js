module.exports = {
  rules: {
    'no-console': ['warn', { allow: ['info', 'warn', 'error', 'debug', 'table'] }],
    'unicorn/prefer-module': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
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
