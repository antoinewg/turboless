# API 2

Backend service using [serverless framework](https://www.serverless.com/).

## Run this service

- install the dependencies: `pnpm i`.
- build and run the services: `pnpm dev`.
- send first request:

```bash
curl -X POST http://localhost:4000/dev/ciao -H "Content-Type: application/json" -d '{"name": "world"}'
```

```json
{ "message": "Ciao World !" }
```