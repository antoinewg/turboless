# Turborepo starter with pnpm

This is an unofficial starter turborepo for serverless + typescript.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Packages

- `config`: `eslint` configurations (includes `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package is 100% [TypeScript](https://www.typescriptlang.org/).

### Services

TODO

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

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
