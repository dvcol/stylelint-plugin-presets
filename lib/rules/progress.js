const chalk = require('chalk');
const ora = require('ora');

const start = Date.now();
const rootPath = `${process.cwd()}/`;
const spinner = ora();

let files = 0;
let bindExit = false;

const exitCallback = (exitCode) => {
  const elapsed = chalk.blue((Date.now() - start) / 1000);
  const nbFiles = chalk.blue(files);
  spinner.prefixText = '\n';
  if (exitCode === 0) {
    spinner.succeed(
      `Lint ${chalk.green(
        'finished',
      )} after processing '${nbFiles}' files in '${elapsed}' seconds.`,
    );
  } else {
    spinner.fail(
      `Lint ${chalk.red(
        'failed',
      )} after processing '${nbFiles}' files in '${elapsed}' seconds.`,
    );
  }
};

const rule = () => (root) => {
  if (!process.env.STYLELINT_PROGRESS) return;
  files += 1;
  if (!bindExit) {
    process.on('exit', exitCallback);
    bindExit = true;
  }

  const filePath = root.source.input.file;

  spinner.text = `${chalk.blue('Processing')}: ${chalk.whiteBright(
    filePath.replace(rootPath, ''),
  )} \n`;
  spinner.render();
};

module.exports.ruleName = '@dvcol/progress';
module.exports = rule;
