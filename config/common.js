module.exports = {
  extends: [
    './a11y',
    'stylelint-config-rational-order',
    'stylelint-config-css-modules',
    './prettier',
  ],
  plugins: [
    'stylelint-high-performance-animation',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-group-selectors',
    'stylelint-use-nesting',
    '../lib',
  ],
  rules: {
    'plugin/no-low-performance-animation-properties': true,
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/stylelint-group-selectors': true,
    'csstools/use-nesting': true,
    '@dvcol/progress': false,
  },
};
