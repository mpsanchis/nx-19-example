import { ExecutorContext } from '@nx/devkit';

import { ExportVarsExecutorSchema } from './schema';
import executor from './executor';

const options: ExportVarsExecutorSchema = {};
const context: ExecutorContext = {
  root: '',
  cwd: process.cwd(),
  isVerbose: false,
};

describe('ExportVars Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
