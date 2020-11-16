# PosgtreSQL Jest Typescript Example

### Initialize Project
```ts
// Initialize project
$ npm install
```

### Run Project (Development)

> 💥 Make sure that port 5432 and 8080 are not used by any other docker containers. If so, remove those running containers first.

```ts
// Start server and database
$ docker-compose up --build
```

### Run Unit Tests
```ts
// Start tests on computer
$ npm run test

// Start tests on GitHub Actions
$ npm run test:ci
```

### Additional Information
#### Routes
```ts
// (no payload required)
POST ~ localhost:8080/create 
```

#### About
This project is only used to indicate how to use PostgreSQL (without mocking) in Jest.

I do not endorse the way this project is structured, purely educational purposes.