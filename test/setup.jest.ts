import { jestCredentials } from "../src/config/connection.config";
import jestDatabaseConnection from "./connection.jest";

/**
 * @author Michiel Swaanen
 *
 * Jest environment setup
 */

beforeAll(async () => {
    await jestDatabaseConnection.create(jestCredentials);
});

afterEach(async () => {
    await jestDatabaseConnection.clear();
});

afterAll(async () => {
    await jestDatabaseConnection.close();
});