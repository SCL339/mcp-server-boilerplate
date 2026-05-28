# scl339-mcp-server

> MCP (Model Context Protocol) server scaffolding CLI — generate production-ready MCP servers in seconds.

[![npm version](https://img.shields.io/npm/v/scl339-mcp-server)](https://www.npmjs.com/package/scl339-mcp-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## What is MCP?

The **Model Context Protocol (MCP)** is the hottest protocol of 2026. It provides a standardized interface between AI coding assistants (Claude Code, Cursor, Windsurf, etc.) and external tools/resources. Every AI coding assistant needs MCP servers to extend its capabilities.

## Features

- 🚀 **One command** to scaffold a complete MCP server project
- 🔌 **Dual transport** support: stdio (default) and HTTP
- 🧩 **Built-in tools** and resources example
- 📦 **Zero-config** — just `npx`, create, and run
- 🔧 **Extensible** template — add your own tools and resources

## Quick Start

```bash
# Create a new MCP server
npx scl339-mcp-server create my-mcp-server

# Navigate to the project
cd my-mcp-server

# Install dependencies
npm install

# Start the server
npm start
```

That's it! Your MCP server is now running on stdio, ready to connect to Claude Code or any MCP-compatible AI assistant.

### With HTTP transport

```bash
npx scl339-mcp-server create my-mcp-server --http
cd my-mcp-server
npm install
# Copy and configure .env
cp .env.example .env
npm start
```

## CLI Options

```
Usage: scl339-mcp-server create [options] <name>

Generate a new MCP server project

Arguments:
  name                   Name of your MCP server project

Options:
  -d, --directory <path> Target directory (default: ./<name>)
  --http                 Include HTTP transport support
  --all                  Include both stdio and HTTP transports
  -h, --help             Display help for command
```

## Generated Project Structure

```
my-mcp-server/
├── index.js          # MCP server with tools & resources
├── package.json      # Dependencies and scripts
├── README.md         # Project documentation
├── .env.example      # Environment configuration
└── .gitignore        # Git ignore rules
```

## Related SCL339 Projects

- [scl339-codebase-analyzer](https://github.com/shuchengle/codebase-analyzer) — Analyze your codebase and generate beautiful HTML statistics reports

## Sponsorship

If you find this project useful, please consider sponsoring via Alipay:

**Alipay Account:** 18559219554

Your support helps maintain and improve this project!

## License

MIT © shuchengle
