Collaborative Notes Project

## Description

Real-time collaborative note-taking app

## Tech Stack:

- Backend: Node.js, Nest, Microservices (AWS lambda)
- API: GraphQL
- DB: AWS DynamoDB(?), PostgreSQL, TypeORM
- Infra: Docker (ECS), Kubernetes (EKS), Terraform, CI/CD, SQS & SNS (or RabbitMQ)
- Caching: Redis

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
