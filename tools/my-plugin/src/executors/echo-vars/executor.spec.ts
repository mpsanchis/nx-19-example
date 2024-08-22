import { ExecutorContext } from '@nx/devkit';

import { EchoVarsExecutorSchema } from './schema';
import executor from './executor';

const options: EchoVarsExecutorSchema = {};
const context: ExecutorContext = {
  root: '',
  cwd: process.cwd(),
  isVerbose: false,
};

describe('EchoVars Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
