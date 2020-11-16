import express, { Application, json } from 'express'
import UserRoute from "./api/routes/user.route";

class ServerApplication {

    private readonly app: Application;


    constructor() {
        this.app = express();
        this.app.use(json());
        this.initializeRoutes()
    }

    public listen(port: string) {
        this.app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    }

    public getApplication(): Application {
        return this.app;
    }

    private initializeRoutes() {
        const userRoute: UserRoute = new UserRoute(this.app);
        userRoute.initCreateRoute();
    }
}

export default ServerApplication;