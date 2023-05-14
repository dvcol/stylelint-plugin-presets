module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    './common',
  ],
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
