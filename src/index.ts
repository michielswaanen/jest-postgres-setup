// Must be imported to use TypeORM (view documentation)
import "reflect-metadata";

import { createConnection } from "typeorm";
import { developmentCredentials } from "./config/connection.config";
import ServerApplication from "./app";

class Main {

    public static async main() {
        const port = process.env.PORT || "8080";

        // Connect to database
        await createConnection(developmentCredentials);

        // Start listening
        new ServerApplication().listen(port);
    }
}

// Start application
(async () => await Main.main())()