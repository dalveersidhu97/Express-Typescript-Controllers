"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./src/App");
const homeController_1 = require("./src/controllers/homeController");
const userController_1 = require("./src/controllers/userController");
const AllControllers = [
    new homeController_1.HomeController(),
    new userController_1.UserController()
];
const expressApp = new App_1.ExpressApp();
expressApp.start(process.env.PORT || 80, AllControllers);
