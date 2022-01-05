const { rules } = require('../shared/prettier');

module.exports = {
  plugins: ['prettier', 'unicorn'],
  extends: ['prettier'],
  rules: {
    ...rules,
  },
};
