// GET /
type GetRoutes = {
    params: {
        slug: string;
    };
    query: {
        name: string;
    };
    reqBody: {
        user_id: number;
    };
    resBody: {
        status: boolean | string;
    };
}
// GET /news
type GetNews = {
    query: {
        news_id: number;
    };
    resBody: {
        id: number;
        title: string;
        slug: string;
        view: number | string;
        banner: string;
        thumbnail: string;
    }[];
}

export type homControllerRoutes = {
    getRoute: GetRoutes,
    getNews: GetNews
};