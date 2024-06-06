#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
//  .name('string-util')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .option('-f, --format [type]','output format')
  .arguments('<filepath1>, <filepath2')
  .helpOption('-h, --help','output usage information')
  .parse(process.argv);