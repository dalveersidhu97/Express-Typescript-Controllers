"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressApp = void 0;
const express_1 = __importDefault(require("express"));
class ExpressApp {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use('/public', express_1.default.static('./'));
    }
    initControllers(controllers) {
        controllers.forEach(controller => {
            controller.init(this.app);
        });
    }
    start(port, controllers) {
        this.initControllers(controllers);
        this.app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    }
}
exports.ExpressApp = ExpressApp;
