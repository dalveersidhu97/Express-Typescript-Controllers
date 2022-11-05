import { Express } from 'express';
import { Controller } from './types/Controller';
import { ControllerRoutes } from './types';

type RouteHandler<Handler> = Controller.GetRouteHandlerType<Handler>;
type Routes = ControllerRoutes.Types['user'];

export class UserController implements Controller.Imple<'user'> {
    init(app: Express) {
        app.get('/users', this.getUsers);
        app.get('/user', this.postUser);
    }
    getUsers: RouteHandler<Routes['getUsers']> = async (request, response) => {
        response.status(200).send({ notImplementedYet: true });
    }
    postUser: RouteHandler<Routes['postUser']> = async (request, response) => {
        response.status(200).send();
    }
}