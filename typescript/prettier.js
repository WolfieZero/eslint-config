const { rules } = require('../shared/prettier');

module.exports = {
  plugins: ['@typescript-eslint', 'unicorn', 'prettier'],
  extends: ['prettier'],
  rules: {
    ...rules,
  },
};
