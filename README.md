🚧 **WORK IN PROGRESS** 🚧

Please note that this project is currently under development. Functionality may change and there may be many bugs!

# Turborepo Starter with Zodios

This is an starter Turborepo enhanced with Zodios, a REST API toolbox that offers end-to-end type safety.

## Stack

**Backend:**

- Typescript
- Zodios
- Express
- Zod
- Supabase

**Frontend:**

- React
- Vite
- React Query
- Mantine
- Zodios

## Zodios Overview

Zodios allows you to create a REST API with a clean, intuitive, and declarative syntax. With Zodios, you can develop an Express application with full type safety and autocompletion, making your coding experience more efficient and error-free. Unique to Zodios, it guarantees that all your parameters and responses are fully typed. By default, they are also validated at runtime to prevent unrecoverable errors.

[https://www.zodios.org/]()

# Backend Project

## About

This project is a backend built with TypeScript. It provides a suite of functionalities and services for an unspecified application. The author is Carlos Ricardo Ziegler.

## Technologies Used

1. **TypeScript**: The project is built in TypeScript, a statically typed version of JavaScript.
2. **Prisma**: Used for ORM, with dedicated scripts for syncing database schemas and generating Prisma client.
3. **Express.js**: This project uses Express.js as its web server framework.
4. **Docker**: Used for services orchestration.
5. **Redis**: Utilized for session management.
6. **Supabase**: Utilized for providing database, authentication, and storage functionalities.
7. **Zod & Zodios**: Used for data validation. Zodios is a REST API toolbox with end-to-end typesafety. It offers a clean, intuitive, and declarative syntax for creating REST APIs. Its sub-packages like `@zodios/core`, `@zodios/plugins`, `@zodios/express`, and `@zodios/openapi` are utilized in this project.
8. **Vitest**: Utilized for testing.
9. **Eslint** and **Prettier**: Utilized to maintain code quality and consistency.

## How to Run

To run this project on your local machine, follow the steps:

1. Install the project dependencies with `npm install` or `yarn`.
2. To run the server in development mode, use the command `npm run dev` or `yarn dev`. This will start the server and automatically restart whenever there are changes to `.ts` files.
3. To run the tests, use `npm run test` or `yarn test`. To run tests with coverage, use `npm run test:coverage` or `yarn test:coverage`.
4. To lint the code, use `npm run lint` or `yarn lint`. To auto-fix linting problems, use `npm run lint:fix` or `yarn lint:fix`.
5. To format the code with Prettier, use `npm run format` or `yarn format`.
6. To build the project for production, use `npm run build` or `yarn build`. This will generate an optimized version of the project in the `dist` folder.
7. To start the server in production, use `npm run start` or `yarn start`.

## Docker Compose

This project has support for Docker and Docker Compose. To start the services using Docker Compose, use `npm run services:up` or `yarn services:up`. To stop the services, use `npm run services:stop` or `yarn services:stop`.

## environments

```sh
HOSTNAME=localhost
PORT=5001
SUPABASE_PROJECT_ID=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_URL=
SUPABASE_JWT=
DATABASE_URL=
REDIS_URL=
```

# Frontend Project

## About

This is a frontend project built with React.js and TypeScript. It provides a user interface for an unspecified application.

## Technologies Used

1. **React.js & TypeScript**: This project is built with React.js, a popular JavaScript library for building user interfaces, and TypeScript, a statically typed version of JavaScript.
2. **Vite**: This project uses Vite for its build tool and dev server.
3. **React Query & Tanstack**: Used for data fetching, caching, synchronization and updates in React applications.
4. **React Router Dom**: Used for managing routing in the React app.
5. **React Hook Form**: Used for managing form state and validation.
6. **Zod & Zodios**: Used for data validation. Zodios is a REST API toolbox with end-to-end typesafety, utilized in this project through `@zodios/core` and `@zodios/react`.
7. **Mantine**: Used for providing UI components.
8. **Eslint**: Utilized to maintain code quality and consistency.
9. **React Testing Library**: Utilized for unit and integration testing.

## How to Run

To run this project on your local machine, follow the steps:

1. Install the project dependencies with `npm install` or `yarn`.
2. To run the server in development mode, use the command `npm run dev` or `yarn dev`. This will start the dev server with hot module replacement.
3. To lint the code, use `npm run lint` or `yarn lint`.
4. To build the project for production, use `npm run build` or `yarn build`. This will generate an optimized version of the project ready for deployment.
5. To preview the build, use `npm run preview` or `yarn preview`.

## License
