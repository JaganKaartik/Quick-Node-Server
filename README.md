# Quick-Node

A base project to quickly spin up a Node server.

File Structure  
```
.
├── Dockerfile
├── LICENSE
├── README.md
├── app
│   ├── config
│   │   ├── database.ts
│   │   ├── default.config.ts
│   │   ├── passport-setup.ts
│   │   └── redis.ts
│   ├── controllers
│   │   ├── api.ts
│   │   └── auth.ts
│   ├── index.ts
│   ├── middlewares
│   │   ├── authCheck.ts
│   │   └── index.ts
│   ├── models
│   │   └── user.ts
│   └── routes
│       ├── api.ts
│       ├── auth.ts
│       └── index.ts
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── docker-compose.test.yml
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── yarn.lock
```
