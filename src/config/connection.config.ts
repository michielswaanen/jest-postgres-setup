import { ConnectionOptions } from "typeorm";

const jestCredentials: ConnectionOptions = {
    name: "default",
    database: "postgres",
    username: "postgres",
    extra: { "max": 5, "min": 2 },
    host: "localhost",
    password: "12345",
    port: 5432,
    synchronize: true,
    dropSchema: true,
    type: "postgres",
    entities: [
        "./src/**/*.entity{.ts,.js}"
    ]
}

const developmentCredentials: ConnectionOptions = {
    name: "default",
    type: "postgres",
    host: "database", // Name must equal docker-compose service name
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "db_name",
    synchronize: true,
    ssl: false,
    entities: [
        "./src/**/*.entity.ts"
    ]
}

export { jestCredentials, developmentCredentials };