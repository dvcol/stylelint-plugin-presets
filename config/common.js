module.exports = {
  extends: [
    './a11y',
    'stylelint-config-rational-order',
    'stylelint-config-css-modules',
    'stylelint-config-html',
  ],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-group-selectors',
    '../lib',
  ],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/stylelint-group-selectors': true,
    'csstools/use-nesting': true,
    '@dvcol/progress': false,
    'selector-type-no-unknown': null,
  },
  overrides: [
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
};
