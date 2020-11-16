import { Application, Request, Response } from 'express'
import { getRepository, Repository } from "typeorm";
import UserEntity from "../entities/user.entity";

class UserRoute {

    private readonly app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    public initCreateRoute() {
        return this.app.post('/create', async (req: Request, res: Response) => {

            // Generate random number
            const minimum = 1
            const maximum = 1000
            const randomNumber = Math.floor(Math.random() * maximum) + minimum

            // Get repository (sql table)
            const repository: Repository<UserEntity> = getRepository(UserEntity)

            // Save user to repository
            const user: UserEntity = await repository.save({
                name: `Bob ${randomNumber}`
            });

            res.status(200).send(user)
        });
    }
}

export default UserRoute;