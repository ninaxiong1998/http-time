"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRouter = void 0;
// routes/api-routes.ts
const express_1 = __importDefault(require("express"));
const api_controllers_1 = require("../controllers/api-controllers");
const apiControllers = new api_controllers_1.ApiControllers;
class ApiRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('', apiControllers.getHomePage);
        this.router.get('time', apiControllers.getTimePage);
        this.router.post('time', apiControllers.postTimePage);
        this.router.put('timezone', apiControllers.putTimezonePage);
        this.router.delete('timezone', apiControllers.deleteTimezonePage);
    }
}
exports.ApiRouter = ApiRouter;
