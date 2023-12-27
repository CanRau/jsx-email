/* eslint-disable import/no-extraneous-dependencies */
import { basename, join } from 'path';

import type { RollupOptions } from 'rollup';
// import babel from '@rollup/plugin-babel';
import swc from '@rollup/plugin-swc';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
// import { readJsonSync } from 'fs-extra';

interface BuildOptions {
  cjs?: boolean;
  entryFile: string;
  esm?: boolean;
  externals?: string[];
  globals?: Record<string, string>;
}

interface Options {
  external?: RollupOptions['external'] | any[];
  globals?: Record<string, string>;
  input: string;
}

// const babelPlugin = babel({
//   babelHelpers: 'bundled',
//   exclude: /node_modules/,
//   extensions: ['.ts', '.tsx']
// });

const swcPlugin = swc({
  swc: {
    jsc: {
      loose: true,
      parser: {
        decorators: true,
        syntax: 'typescript',
        tsx: true
      },
      target: 'es2020',
      transform: {
        decoratorMetadata: true,
        legacyDecorator: true
      }
    }
  }
});

export const createRollupConfig = (build: BuildOptions): RollupOptions[] =>
  buildConfigs({
    cjs: build.cjs ?? true,
    entryFile: build.entryFile,
    esm: build.esm ?? true,
    externals: build.externals || [],
    globals: build.globals ?? {}
  });

function buildConfigs(opts: BuildOptions): RollupOptions[] {
  const packageJson = require(join(process.cwd(), 'package.json'));

  const options: Options = {
    external: [
      ...Object.keys(packageJson.dependencies ?? {}),
      ...Object.keys(packageJson.peerDependencies ?? {}),
      ...(opts.externals || [])
    ],
    globals: opts.globals,
    input: join(process.cwd(), opts.entryFile)
  };

  return [opts.esm ? esm(options) : null, opts.cjs ? cjs(options) : null, types(options)].filter(
    Boolean
  ) as any;
}

function esm({ input, external }: Options): RollupOptions {
  return {
    // ESM
    external,
    input,
    output: {
      dir: `./out/esm`,
      format: 'esm',
      sourcemap: true
    },

    plugins: [swcPlugin, nodeResolve({ extensions: ['.ts', '.tsx'] })]
  };
}

function cjs({ input, external }: Options): RollupOptions {
  return {
    // CJS
    external,
    input,
    output: {
      dir: `./out/cjs`,
      exports: 'named',
      format: 'cjs',
      preserveModules: true,
      sourcemap: true
    },
    plugins: [swcPlugin, commonjs(), nodeResolve({ extensions: ['.ts', '.tsx'] })]
  };
}

function types({ input, external }: Options): RollupOptions {
  return {
    // TYPES
    external,
    input,
    output: {
      file: `./out/types/${basename(input).split('.')[0]}.d.ts`,
      format: 'es'
    },
    plugins: [dts()]
  };
}
