export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    './common',
  ],
  rules: {},
  overrides: [
    // extends module override to vue files
    {
      files: '**/*.vue',
      plugins: ['stylelint-scss'],
      rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['value'],
          },
        ],
        'function-no-unknown': null,
        'scss/function-no-unknown': [
          true,
          {
            ignoreFunctions: ['global'],
          },
        ],
      },
    },
  ],
};
