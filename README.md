# Turborepo starter with pnpm for serverless

This is an unofficial starter turborepo for serverless + typescript.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Packages

- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package is 100% [TypeScript](https://www.typescriptlang.org/).

### Services

- `api1`: serverless service to say hello. Run `pnpm dev` to run the offline in offline mode.

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Github Actions](https://github.com/features/actions) for CI.

### Build

To build all apps and packages, run the following command:

```bash
cd my-turborepo
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```bash
cd my-turborepo
pnpm run dev
```

### Remote Caching

See [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching) for more info.

## Get started

- clone this repo, or use it as template.
- install [pnpm](https://pnpm.io/installation) for package management.
- install the dependencies: `pnpm i`.
- build and run the services: `pnpm run build && pnpm run dev`.
