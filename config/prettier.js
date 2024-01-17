export default {
  extends: ['stylelint-prettier/recommended'],
  rules: {
    'prettier/prettier': [
      true,
      { printWidth: 150, singleQuote: true, trailingComma: 'all' },
    ],
  },
};
