import express, { Express } from 'express';
import { Controller } from './controllers/types/Controller';
import { ControllerRoutes } from './controllers/types';

export class ExpressApp {
    private app: Express;
    constructor() {
        this.app = express();
        this.app.use('/public', express.static('./'))
    }
    private initControllers(controllers: Controller.Every[]) {
        controllers.forEach(controller => {
            controller.init(this.app);
        });
    }
    start(port: number | string, controllers: Controller.Every[]) {
        this.initControllers(controllers);
        this.app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        });
    }
}