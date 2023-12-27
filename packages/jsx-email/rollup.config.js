/* eslint-disable import/no-extraneous-dependencies */

require('ts-node').register({
  compilerOptions: {
    esModuleInterop: true
  }
});

const { createRollupConfig } = require('../../shared/rollup');

const config = createRollupConfig({
  entryFile: './src/index.ts'
});

console.log(process.cwd());

module.exports = config;
