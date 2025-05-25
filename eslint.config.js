import { defineBaseConfig } from '@dvcol/eslint-config';

export default defineBaseConfig({
  ignores: [
    '.github/copilot-instructions.md',
    'README.md',
  ],
});
