import * as tstl from 'typescript-to-lua';
import * as ts from 'typescript';

declare global {
  function instanceOf<T extends object, Type extends abstract new (...args: never) => InstanceType<Type>>(
    target: T,
    type: Type
  ): target is T & InstanceType<Type>;
}

function fixInstanceOf(code: string): string {
  if (code.length === 0) return '';

  const regex = /instanceOf\((\w*),\s*?[^"](\w*)[^"]?\)/g;

  return code.replace(regex, 'instanceof($1, "$2")');
}

class PipeWrenchUtilsPlugin implements tstl.Plugin {
  beforeEmit(program: ts.Program, options: tstl.CompilerOptions, emitHost: tstl.EmitHost, result: tstl.EmitFile[]) {
    for (const file of result) {
      file.code = fixInstanceOf(file.code);
    }
  }
}

const pluginInstance = new PipeWrenchUtilsPlugin();

export default pluginInstance;
