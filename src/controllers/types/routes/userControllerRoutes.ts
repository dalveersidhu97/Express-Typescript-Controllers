
type GetUsers = {
    resBody: {
        notImplementedYet: boolean;
    }; 
}
type PostUsers = {
    reqBody: {
        name: string;
        age: string | number;
    };
}

export type userControllerRoutes = {
    getUsers: GetUsers,
    postUser: PostUsers,
};