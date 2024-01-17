import stylelint from 'stylelint';

import rules from './rules/index.js';

const { createPlugin } = stylelint;

const rulesPlugins = Object.keys(rules).map(ruleName => createPlugin(`@dvcol/${ruleName}`, rules[ruleName]));

export default rulesPlugins;
