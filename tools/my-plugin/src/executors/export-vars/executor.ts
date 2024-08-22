import * as fs from "fs";
import { join } from "path";

import { ExecutorContext, PromiseExecutor } from '@nx/devkit';
import { ExportVarsExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<ExportVarsExecutorSchema> = async (
  options: ExportVarsExecutorSchema, context: ExecutorContext
) => {

  const {
    paths,
    vars
  } = normalizeOptions(options, context);
  
  const varsJoined = vars.join("\n");

  for (const path of paths) {
    fs.writeFileSync(path, varsJoined);
  }
  return {
    success: true,
  };
};

export default runExecutor;

function normalizeOptions(options: ExportVarsExecutorSchema, context: ExecutorContext): Required<ExportVarsExecutorSchema> {
  const paths = options.paths ?? [];
  const vars = options.vars ?? [];

  const dotEnvAbsPaths = paths.map(path => join(context.root, path, ".env"));
  
  return {
    paths: dotEnvAbsPaths,
    vars
  }
}