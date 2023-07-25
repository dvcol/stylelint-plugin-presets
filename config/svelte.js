module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    './common',
  ],
  rules: {
    'at-rule-no-unknown': null,
  },
  overrides: [
    {
      files: ['**/*.svelte', '**/*.svx'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.css', '**/*.scss'],
      extends: ['./prettier'],
    },
  ],
};
