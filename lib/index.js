const requireIndex = require('requireindex');
const { createPlugin } = require('stylelint');

const rules = requireIndex(`${__dirname}/rules`);

const rulesPlugins = Object.keys(rules).map(ruleName => createPlugin(`@dvcol/${ruleName}`, rules[ruleName]));

module.exports = rulesPlugins;
