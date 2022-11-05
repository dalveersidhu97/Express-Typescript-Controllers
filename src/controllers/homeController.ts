import { Express } from 'express';
import { Controller } from './types/Controller';
import { ControllerRoutes } from './types';

type RouteHandler<Handler> = Controller.GetRouteHandlerType<Handler>;
type Routes = ControllerRoutes.Types['home'];

export class HomeController implements Controller.Imple<'home'> {
    init(app: Express) {
        app.get('/news', this.getNews);
        app.post('/routes', this.getRoute);
    }
    getRoute: RouteHandler<Routes['getRoute']> = async (request, response) => {
        response.status(200).end();
    }
    getNews: RouteHandler<Routes['getNews']> = async (request, response) => {
        const payload: Routes['getNews']['resBody'] = [
            {
                id: 1,
                banner: 'banner',
                slug: 'news-slug',
                thumbnail: 'thumbnail',
                title: 'This is the title',
                view: 2
            }
        ]
        response.status(200).send(payload);
    }
}