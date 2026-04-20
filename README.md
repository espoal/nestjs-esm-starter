# Introduction


# Usage

## Setup

Install corepack: 
```bash
$ npm uninstall -g yarn pnpm
$ npm install -g corepack
$ corepack enable pnpm@latest
```
Install the dependencies:
```bash
$ pnpm install
```

## Run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

# Features

## Done

- pnpm configuration
- Pinned deps

## TODO

- workspaces
- modules
- biome.js
- node:test
- config SWC
- Remove extensions while using modules
- json5
- tsgo
- PnP
- target modules (type: module)
- precommit
- Remove rxjs and reflect-metadata
- editorconfig
