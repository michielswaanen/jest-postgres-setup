import ServerApplication from "../../../app";
import supertest from "supertest";

describe('POST - /create', () => {

    const application = new ServerApplication().getApplication();
    const server = supertest(application);

    it(`Successfully adds a user to a postgres database`, async () => {

        const response = await server
            .post('/create');

        expect(response.status).toEqual(200)
        expect(response.body.name).toContain('Bob')
    });
});