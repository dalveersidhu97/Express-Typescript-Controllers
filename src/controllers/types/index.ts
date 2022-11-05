import { NextFunction, Request, Response } from 'express';
import { HomeController } from '../homeController';
import { UserController } from '../userController';
import { homControllerRoutes } from './routes/homeControllerRoutes';
import { userControllerRoutes } from './routes/userControllerRoutes';

export namespace ControllerRoutes {
    export type Types = {
        home: homControllerRoutes,
        user: userControllerRoutes
    }
}

