# NestJS Boilerplate

This is a boilerplate code for NestJS projects.

## Description

The boilerplate code contains the following components:

1. **Fastify** — Highly performant web framework
2. **Swagger** — OpenAPI documentation generation
3. **Pino** — Structured logging
4. **Rate Limiter** — Request rate limiting (@fastify/rate-limit)
5. **Config Module** — Environment variable configuration (@nestjs/config)
6. **Helmet** — Security headers (@fastify/helmet)
7. **Static Files** — Static file serving (@fastify/static)
8. **Health Checks** — Service health monitoring (@nestjs/terminus)
9. **Zod** — Schema validation
10. **Example Module** — Reference module structure (controller, service, tests)

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

