#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
//  .name('string-util')
  .description('Compares two configuration files and shows a difference.')
  .version('1.8.0')
  .parse(process.argv);