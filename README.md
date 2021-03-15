# Node Server Boilerplate

A template for creating a containerised Express.js server using Typescript.

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
