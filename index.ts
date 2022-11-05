import { ExpressApp } from "./src/App";
import { HomeController } from "./src/controllers/homeController";
import { UserController } from "./src/controllers/userController";

const AllControllers = [
    new HomeController(),
    new UserController()
];

const expressApp = new ExpressApp();
expressApp.start(process.env.PORT || 80, AllControllers);
