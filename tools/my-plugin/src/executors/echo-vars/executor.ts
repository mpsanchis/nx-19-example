import { PromiseExecutor, logger } from '@nx/devkit';
import { EchoVarsExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<EchoVarsExecutorSchema> = async () => {
  if ( process.env && process.env["FOO"] ) {
    logger.info(`FOO is: ${process.env["FOO"]}`);
    return { success: true };
  }
  throw new Error(`FOO not found`);
};

export default runExecutor;
