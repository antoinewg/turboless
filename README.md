# Turboless 🐠

This is an unofficial starter turborepo for serverless + typescript.

Don't be fooled by it's name, it's simply a contraction of `turborepo` and `serverless`.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Packages

- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package is 100% [TypeScript](https://www.typescriptlang.org/).

### Services

- `api1`: serverless service to say hello.
- `api2`: serverless service to say ciao.

Run `pnpm dev` to run in offline mode (from the service or the root level).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Github Actions](https://github.com/features/actions) for CI.
- [vitest](https://vitest.dev/) for testing.

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

## Testing

This template uses [vitest](https://vitest.dev/) as a testing framework.

```bash
cd my-turborepo
pnpm test       # to run the tests, with coverage
pnpm test:watch # to run tests in watch mode
```

## Deployment

Make sure to have `AWS_PROFILE` set up to the aws profile you want to deploy with. Otherwise the command will fail.
Run `aws configure list-profiles` to see your profiles available.

This template simulates two environments (staging and production):

```bash
cd my-turborepo
AWS_PROFILE=<aws_profile> pnpm deploy:staging
AWS_PROFILE=<aws_profile> pnpm deploy:production
```

⚠️ Running this command will deploy to AWS. Please make sure this is what you intend and beware of unintentional usage.

## Contributing

Feel free to open a PR, file an issue. I'll happily look into it.

### Remote Caching

See [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching) for more info.

## Get started

- clone this repo, or use it as template.
- install [pnpm](https://pnpm.io/installation) for package management.
- install the dependencies: `pnpm i`.
- build and run the services: `pnpm run build && pnpm run dev`.
- send first request:

```bash
curl -X POST http://localhost:3000/dev/hello -H "Content-Type: application/json" -d '{"name": "World"}'
```

```json
{ "message": "Hello World !" }
```

```bash
curl -X POST http://localhost:4000/dev/ciao -H "Content-Type: application/json" -d '{"name": "world"}'
```

```json
{ "message": "Ciao World !" }
```

## TODO

These are a list of features in the pipeline:

- [ ] documentation and guidelines on how to add a new api or service.
- [ ] automatic changelog generation and release of packages with `changesets`.
- [ ] auto-linting and formatting on save for faster development.
- [ ] automatic deployment when merging to main.
- [ ] website for documentation.

## Inspiration

[Initial issue](https://github.com/vercel/turbo/issues/221).
