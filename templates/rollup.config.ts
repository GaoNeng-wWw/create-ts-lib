import {defineConfig, RollupOptions} from 'rollup';
import common from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import ts from '@rollup/plugin-typescript';
import replacer from '@rollup/plugin-replace';
import {readFileSync} from 'fs';

const {name} = JSON.parse(readFileSync('./package.json').toString());

const formats = ['esm', 'commonjs', 'iife'];

const createConfig = (format: string) => {
  console.log(format);
  return {
    input: ['./src/index.ts'],
    output: {
      format,
      name,
      file: `dist/${name}${format === 'commonjs' ? '' : `.${format}`}.js`
    },
    plugins:[
      common(),
      resolve(),
      ts(),
      replacer({
        values: {
          '__DEV__': 'false',
          '__TEST__': 'false'
        },
        preventAssignment: true,
      }),
    ],
  } as RollupOptions;
};

export default defineConfig([...formats.map((format) => {return createConfig(format);})]);