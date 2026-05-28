#!/usr/bin/env node

import { program } from 'commander';
import { createProject } from '../index.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkg = JSON.parse(readFileSync(join(__dirname, '..', 'package.json'), 'utf-8'));

program
  .name('scl339-mcp-server')
  .description('MCP (Model Context Protocol) server scaffolding CLI')
  .version(pkg.version);

program
  .command('create')
  .description('Generate a new MCP server project')
  .argument('<name>', 'name of your MCP server project')
  .option('-d, --directory <path>', 'target directory (default: ./<name>)')
  .option('--http', 'include HTTP transport support (default: stdio only)')
  .option('--all', 'include both stdio and HTTP transports')
  .action(async (name, options) => {
    try {
      await createProject(name, options);
    } catch (err) {
      console.error('Error:', err.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
