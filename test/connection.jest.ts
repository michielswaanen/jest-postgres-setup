import { Connection, ConnectionOptions, createConnection } from "typeorm";

let connection: Connection;

const jestDatabaseConnection = {

    async create(options: ConnectionOptions) {
        connection = await createConnection(options);
    },

    async close(){
        await connection.close();
    },

    async clear(){
        const entities = connection.entityMetadatas;

        for (const entity of entities) {
            const repository = await connection.getRepository(entity.name);
            await repository.clear();
        }
    },
};
export default jestDatabaseConnection;