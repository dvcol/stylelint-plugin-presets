module.exports = {
  extends: [
    './a11y',
    'stylelint-config-rational-order',
    'stylelint-config-css-modules',
    'stylelint-config-html',
    './prettier',
  ],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-group-selectors',
    'stylelint-use-nesting',
    '../lib',
  ],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/stylelint-group-selectors': true,
    'csstools/use-nesting': true,
    '@dvcol/progress': false,
  },
  overrides: [
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
};
