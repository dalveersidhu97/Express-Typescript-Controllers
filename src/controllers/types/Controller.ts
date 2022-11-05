import { Express, Request, Response, NextFunction } from 'express';
import { ControllerRoutes } from '.';
export namespace Controller {
    type RouteHandlers<ControllerKey extends RoutesKeys> = {
        [key in keyof ControllerRoutes.Types[ControllerKey]]: GetRouteHandlerType<ControllerRoutes.Types[ControllerKey][key]>;
    }
    type ControllerImpl = {
        init: (app: Express) => void,
    }
    export type RoutesKeys = keyof ControllerRoutes.Types;
    // Implementing this will type strick Request, Response and RouteHandler Implementation
    export type Imple<ControllerKey extends RoutesKeys> = RouteHandlers<ControllerKey> & ControllerImpl;
    export type Every = Imple<RoutesKeys>;
    
    export type GetRouteHandlerType<RouteType> = (req: GetRequestType<RouteType>, res: GetResponseType<RouteType>, next: NextFunction) => any;
    export type GetRequestType<RouteType> =
        RouteType extends {
            params?: infer ReqParams,
            reqBody?: infer ReqBody,
            query?: infer ReqQuery,
            resBody?: infer ResBody
        }
        ? Request<ReqParams, ResBody, ReqBody, ReqQuery>
        : Request<unknown, unknown, unknown, unknown>;
    export type GetResponseType<RouteType> =
        RouteType extends { resBody: infer ResBody }
        ? Response<ResBody>
        : Response<never>;
}
